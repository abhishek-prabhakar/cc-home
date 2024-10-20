const RoutesList = {
    UserLogin: '/user/login?redirectUrl=:redirectUrl',
    VendorProfile: '/profile/:id',
    VendorProfileWithService: '/profile/:id?service=:sGrpId',
    Collections: '/collections/:id',
    CollectionsByVendor: '/collections/:id/:vendorType',
    Services: '/services/:id',
    ServiceGroup: '/services/:id/:subId',
    Cart: '/cart',
    CartItem: '/cart/add/:id',
    CartAddEdit: '/cart/add/:venderServiceGroupId',
    VendorSignupForm: '/partner/signup/onboard/:id',
    CheckoutPayment: '/cart/checkout/payment',
    PaymentGateway: '/order/payment?id=:id',
    UserManageOrder: '/user/order/:id',
    OrderInvoice: '/user/order/:id/invoice',
    VendorManageOrder: '/vendor/manage/:id',
    VendorPackage: '/cart/package/:username/:id',
    MakeYourPackage: '/cart/package/:vendorGroupId'
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