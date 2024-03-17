const RoutesList = {
    VendorProfile: '/profile/:id',
    VendorProfileWithService: '/profile/:id?service=:sGrpId',
    Collections: '/collections/:id',
    CollectionsByVendor: '/collections/:id/:vendorType',
    Services: '/services/:id',
    ServiceGroup: '/services/:id/:subId',
    Cart: '/cart/checkout',
    CartItem: '/cart/add/:id',
    CartAddEdit: '/cart/add/:venderServiceGroupId',
    VendorSignupForm: '/partner/signup/onboard/:id',
    CheckoutPayment: '/cart/checkout/payment',
}

type RoutesKeys = keyof typeof RoutesList;

function getRoute(key: RoutesKeys, params: { [key in string]: string | number } = {}) {
    let path = RoutesList[key];
    const replacer = Object.keys(params);
    replacer.forEach(item => {
        path = path.replace(':' + item, params[item].toString());
    });
    return path;
}


const Routes = {
    get: getRoute
}

export default Routes;