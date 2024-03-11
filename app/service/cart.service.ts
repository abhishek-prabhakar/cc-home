import { CartInput, CartItem, CartItemService } from "~/types";
import { ServiceQuery } from "./services.service";
import { PATH } from "~/path.data";
import { FareMode } from "@prisma/client";

const GST_PERCENTAGE = 3;

export const CartService = {
    getGst: GST_PERCENTAGE,
    calculate: function (cart: CartItem[]) {
        const gst = GST_PERCENTAGE;
        const total = cart.reduce<CartItemService[]>((arr, x) => arr.concat(x.services), []).reduce((sum, item) => sum + item.cost, 0);
        const tax = (gst * total) / 100;

        return {
            total,
            tax,
            gst,
            final: total + tax,
            discount: 0,
            coupon: null
        };
    },
    summary: function (cart: CartInput[]) {
        return new Promise<CartItem[]>(async function (resolve) {
            if (!cart?.length) {
                resolve([]);
                return;
            }
            let results: CartItem[] = [];
            for (let i = 0; i < cart.length; i++) {
                const item = cart[i];
                const res = await ServiceQuery.getVendorServices(item.vendorServiceGroupId, item.services.map(x => x.id).filter(x => !!x));
                if (res) {
                    results.push({
                        name: res.group.name,
                        coverImg: res.group.imageName ? PATH.RESOURCE_URL + res.group.imageName : '',
                        vendorServiceGroupId: res.id,
                        vendorType: res.vendor.vendorType?.name || '',
                        vendorName: res.vendor.username,
                        vendorImg: res.vendor.profileImageName ? PATH.RESOURCE_URL + res.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER,
                        vendorId: res.vendor.username,
                        date: item.date,
                        timeHour: item.timeHour,
                        duration: res.group.minHour,
                        cost: res.cost,
                        services: [{ name: 'Base charge', cost: res.cost, id: '', fareMode: 'FLAT' }, ...res.vendorService.map(x => ({
                            name: x.service.name,
                            cost: x.cost,
                            id: x.service.id,
                            fareMode: x.fareMode
                        }))]
                    });
                }
            };

            resolve(results);

        });
    }
}