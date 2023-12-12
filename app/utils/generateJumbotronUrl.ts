export function generateJumbotronUrl(data: {
    vendorTypeId?: string | null,
    serviceGroupId?: string | null,
    serviceId?: string | null,

}) {
    let url: string = '';
    if (data.vendorTypeId) {
        url = '/collections/:vendorType';
    } else if (data.serviceGroupId) {
        url = '/collections/:vendorType?category=:serviceGroupId';
    } else if (data.serviceId) {
        url = '/collections/:serviceGroupId?category=:serviceId'
    }

    return url;
}