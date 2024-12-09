import Routes from "~/routes.data";

export function generateJumbotronUrl(data: {
    vendorTypeId?: string | null,
    serviceGroupId?: string | null,
    serviceId?: string | null,
    profileId?: string | null
}) {
    let url: string = '';
    if (data.serviceGroupId &&  data.vendorTypeId) {
        url = Routes.get('ServiceGroup',{id: data.vendorTypeId ,subId: data.serviceGroupId}); 
    } else if (data.vendorTypeId) {
        url = Routes.get('Services',{id: data.vendorTypeId});
    }  else if (data.profileId) {
        url = Routes.get('VendorProfile',{id: data.profileId}); 
    }

    return url;
}