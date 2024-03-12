const Routes = {
    VendorProfile: '/profile/:id',
    VendorProfileWithService: '/profile/:id?service=:sGrpId',
    Collections: '/collections/:id',
    CollectionsByVendor: '/collections/:id/:vendorType',
    Services: '/services/:id',
    ServiceGroup: '/services/:id/:subId',
    Cart: '/cart/checkout',
    CartItem: '/cart/add/:id',
    VendorSignupForm: '/partner/signup/onboard/:id',
    CheckoutPayment: '/cart/checkout/payment'
}

export default Routes;