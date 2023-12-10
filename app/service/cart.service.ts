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

            const params = cart.service.reduce<{ [key in string]: { date: Date, timeHour: number, duration: number } }>((obj, x) => {
                obj[x.vendorServiceId] = {
                    date: new Date(x.date),
                    timeHour: x.timeHour,
                    duration: x.duration
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
                            vendorType: x.service.vendorService[0].vendor.vendorType?.name || '',
                            vendorName: x.service.vendorService[0].vendor.username,
                            vendorImg: x.service.vendorService[0].vendor.profileImageName ? PATH.RESOURCE_URL + x.service.vendorService[0].vendor.profileImageName : PATH.AVATAR_PLACEHOLDER,
                            vendorId: x.service.vendorService[0].vendor.id,
                            cost: x.service.vendorService[0].cost,
                            id: x.service.vendorService[0].id,
                            isOptional: x.isOptional,
                            date: params[x.service.vendorService[0].id].date,
                            timeHour: params[x.service.vendorService[0].id].timeHour,
                            duration: params[x.service.vendorService[0].id].duration,
                            image: x.service.imageName ? PATH.RESOURCE_URL + x.service.imageName : ''
                        }))
                    })
                }
            });
        });
    }
}