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
            if (!cart?.services?.length) {
                resolve(null);
                return;
            }

            ServiceQuery.getVendorServices(cart.serviceGroupId, cart.services.map(x => x.id).filter(x => !!x)).then(res => {
                if (!res) {
                    resolve(null);
                } else {
                    resolve({
                        name: res.group.name,
                        coverImg: res.group.imageName ? PATH.RESOURCE_URL + res.group.imageName : '',
                        serviceGroupId: res.group.id,
                        vendorType: res.vendor.vendorType?.name || '',
                        vendorName: res.vendor.username,
                        vendorImg: res.vendor.profileImageName ? PATH.RESOURCE_URL + res.vendor.profileImageName : PATH.AVATAR_PLACEHOLDER,
                        vendorId: res.vendor.username,
                        date: cart.date,
                        timeHour: cart.timeHour,
                        duration: cart.duration,
                        services: [{ name: 'Base charge', cost: res.cost, id: '' }].concat(res.vendorService.map(x => ({
                            name: x.service.name,
                            cost: x.cost,
                            id: x.service.id
                        })))
                    })
                }
            });
        });
    }
}