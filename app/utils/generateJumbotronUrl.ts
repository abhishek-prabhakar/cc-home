export function generateJumbotronUrl(data: {
    vendorTypeId?: string | null,
    serviceGroupId?: string | null,
    serviceId?: string | null,

}) {
    let url: string = '';
    if (data.vendorTypeId) {
        url = '/services/:vendorType';
    } else if (data.serviceGroupId) {
        url = '/services/:vendorType?category=:serviceGroupId';
    } else if (data.serviceId) {
        url = '/services/:serviceGroupId?category=:serviceId'
    }

    return url;
}