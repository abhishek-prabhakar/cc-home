import { CartInput, CartItem } from "~/types";
import { ServiceQuery } from "./services.service";
import { PATH } from "~/path.data";

const GST_PERCENTAGE = 3;

export const CartService = {
    getGst: GST_PERCENTAGE,
    calculate: function (cart: CartItem) {
        const gst = GST_PERCENTAGE;
        const total = cart.services.reduce((sum, item) => sum + item.cost, 0);
        const tax = (gst * total) / 100;

        return {
            total,
            tax,
            gst,
            final: total + tax
        };
    },
    summary: function (cart: CartInput) {
        return new Promise<CartItem | null>(function (resolve) {
            if (!cart?.service?.length) {
                resolve(null);
                return;
            }

            const params = cart.service.reduce<{ [key in string]: { date: Date, time: number[], duration: number } }>((obj, x) => {
                obj[x.vendorServiceId] = {
                    date: new Date(x.date),
                    time: x.time,
                    duration: 3
                };
                return obj;
            }, {});

            ServiceQuery.getVendorServices(cart.service.map(x => x.vendorServiceId)).then(res => {
                if (!res) {
                    resolve(null);
                } else {
                    resolve({
                        serviceGroupId: res.id,
                        services: res.serviceGroupItem.map(x => ({
                            name: x.service.name,
                            vendorType: x.service.vendorServices[0].vendors.vendorType.name,
                            vendorName: x.service.vendorServices[0].vendors.username,
                            vendorId: x.service.vendorServices[0].vendors.id,
                            cost: x.service.vendorServices[0].cost,
                            id: x.service.vendorServices[0].id,
                            isOptional: x.isOptional,
                            date: params[x.service.vendorServices[0].id].date,
                            time: params[x.service.vendorServices[0].id].time,
                            duration: params[x.service.vendorServices[0].id].duration,
                            image: x.service.imageName ? PATH.RESOURCE_URL + x.service.imageName : ''
                        }))
                    })
                }
            });
        });
    }
}