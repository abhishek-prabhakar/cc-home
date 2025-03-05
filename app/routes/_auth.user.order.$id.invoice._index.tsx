import { BLANK_PDF, type Template } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import { LoaderArgs } from '@remix-run/node';
import OrderService from '~/service/order.service';
import { text, image, barcodes } from "@pdfme/schemas";
import { BookingPaymentMode } from '@prisma/client';
import COMMON_DATA from '~/data/common.data';
import { DateFormatter } from '~/utils/date.transform';
import { brandLogoBase64 } from '~/data/brand-logo.invoice';

export async function loader({ request, params }: LoaderArgs) {
    const orderId = params.id;
    if(!orderId){
       return  new Error();
    }

    const orderSummary = await OrderService.orderSummary(orderId);


    const template: Template = {
        basePdf: BLANK_PDF,
        "schemas": [
            {
              "brandname": {
                "type": "text",
                "position": {
                  "x": 25,
                  "y": 26
                },
                "width": 108.2,
                "height": 9.38,
                "fontSize": 12,
                "fontColor": "#000000",
              },
              "brandlogo": {
                "type": "image",
                "content": brandLogoBase64,
                "position": {
                  "x": 149.22,
                  "y": 14.28
                },
                "width": 40,
                "height": 40,
              },
              "address": {
                "type": "text",
                "content": "02 - VASANTHA TOWERS, COCONUT garden layout,\nKrishnarajapuram, Bangalore North, Bangalore, Karnataka - 560036",
                "position": {
                  "x": 25,
                  "y": 35
                },
                "width": 107.71,
                "height": 13.71,
                "fontSize": 10,
                "fontColor": "#999999",
              },
              "gstNo": {
                "type": "text",
                "content": "GST: ",
                "position": {
                  "x": 25,
                  "y": 45
                },
                "width": 107.71,
                "height": 13.71,
                "fontSize": 10,
                "fontColor": "#000000",
              },
              "invoice": {
                "type": "text",
                "content": "Invoice",
                "position": {
                  "x": 25,
                  "y": 70
                },
                "width": 85,
                "height": 10,
                "fontSize": 14,
                "fontColor": "#000000",
              },
              "date": {
                "type": "text",
                "content": "-",
                "position": {
                  "x": 25,
                  "y": 80
                },
                "width": 45,
                "height": 10,
                "fontSize": 10,
                "fontColor": "#000000",
              },
              "field4": {
                "type": "text",
                "content": "Description",
                "position": {
                  "x": 25,
                  "y": 104
                },
                "width": 45,
                "height": 10,
                "fontSize": 11,
                "fontColor": "#000000",
              },
              "field5": {
                "type": "text",
                "content": "Amount (INR)",
                "position": {
                  "x": 135,
                  "y": 104
                },
                "width": 50,
                "height": 10,
                "alignment": "right",
                "fontSize": 11,
                "fontColor": "#000000"
              }
            }
          ],
    };

    const inputs = [{
        "brandname": "Celebria Collective Private Limited",
        "brandlogo": brandLogoBase64,
        "address": "02 - VASANTHA TOWERS, COCONUT garden layout,\nKrishnarajapuram, Bangalore North, Bangalore, Karnataka - 560036",
        "field4": "Description",
        "field5": "Amount (INR)",
        "gstNo": "GST: ",
        "date": "Date: "+ (orderSummary.BookingPayments[0]?.updated_at? DateFormatter.short(orderSummary.BookingPayments[0].updated_at || ''): '-'),
        "invoice": "Invoice #"+ orderId,
        "subTotalLabel": "Sub Total",
        "totalLabel": "Total",
        "discountLabel": "Discount",
        "additionalDiscountLabel": "Additional Promo",
        "taxLabel": "Tax",
        "subTotal": "0",
        "total": "0",
        "discount": "0",
        "additionalDiscount": "0",
        "tax": "0"
      }];


    let lastRowPos = 110;
    const NEXT_ROW_GAP = 6;
    orderSummary.bookingService.forEach((item,i) =>{
       lastRowPos+=NEXT_ROW_GAP;
       const newField = {
            ["item"+i]: {
                "type": "text",
                "position": {
                "x": 25,
                "y": lastRowPos
                },
                "width": 50,
                "height": 10,
                "fontSize": 10,
                "fontColor": "#000000",
            },
            ["value"+i]: {
                "type": "text",
                "position": {
                "x": 135,
                "y": lastRowPos
                },
                "width": 50,
                "height": 10,
                "alignment": "right",
                "fontSize": 10,
                "fontColor": "#000000"
            }
        };

        template.schemas[0] = { ...template.schemas[0], ...newField };
        inputs[0] = {
            ...inputs[0], 
            ["item"+i]: item.vendorServiceGroup.group.name,
            ["value"+i]: item.cost.toLocaleString()
        }
    });

    lastRowPos+=NEXT_ROW_GAP;
    const items = [
            { key: 'subTotalLabel', value: 'subTotal' },
            { key: 'discountLabel', value: 'discount' },
            { key: 'additionalDiscountLabel', value: 'additionalDiscount' },
            { key: 'taxLabel', value: 'tax' },
            { key: 'totalLabel', value: 'total' },
        ];


    if(orderSummary.paymentMode === BookingPaymentMode.FULL){
       
    }


    items.forEach((item, index) =>{
        lastRowPos+=NEXT_ROW_GAP;
        template.schemas[0][item.key] = {
                "type": "text",
                "position": {
                "x": 25,
                "y": lastRowPos
                },
                "width": 50,
                "height": 10,
                "fontSize": index === items.length-1? 12: 10,
                "fontColor": "#000000",
        };
        template.schemas[0][item.value] = {
                "type": "text",
                "position": {
                "x": 135,
                "y": lastRowPos
                },
                "width": 50,
                "height": 10,
                "alignment": "right",
                "fontSize": index === items.length-1? 12: 10,
                "fontColor": "#000000"
        };
    });

    inputs[0]["subTotal"] = orderSummary.subTotal.toLocaleString();
    inputs[0]["total"] = orderSummary.total.toLocaleString();
    inputs[0]["discount"] = '-'+orderSummary.discount.toLocaleString();
    inputs[0]["additionalDiscount"] = '-'+Math.round(orderSummary.subTotal * COMMON_DATA.FULL_PAYMENT_DISCOUNT/100).toLocaleString();
    inputs[0]["tax"] = orderSummary.tax.toLocaleString();

    const plugins = { text, image };
    const pdf = await generate({ template, plugins, inputs });
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });

    let headers = new Headers({ "Content-Type": "application/pdf" });
    return new Response(blob, { status: 200, headers });
}
