const Routes = {
    VendorProfile: '/profile/:id',
    VendorProfileWithService: '/profile/:id?service=:sId',
    Collections: '/collections/:id',
    CollectionsByVendor: '/collections/:id/:vendorType',
    Services: '/services/:id',
    ServiceGroup: '/services/:id/:subId',
    Cart: '/cart/checkout'
}

export default Routes;