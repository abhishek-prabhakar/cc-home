export const VendorQuery = {
    getVendorById: (id: string) => {
        return {
            id: 'jessica', fullName: 'Jessica', location: 'Bangalore', gender: 'Female', email: '3ewwer',
            type: 'Photographer',
        }
    },
    getServices: (vendorId: string) => {
        return [{
            id: 's1',
            title: 'Wedding',
            included: [{
                id: 'Pre-wedding',
                title: 'Pre-wedding',
                duration: 4
            },
            {
                id: 'op2',
                title: 'Wedding eve',
                duration: 4
            }],
            addons: [{
                id: 'ad1',
                title: 'Kids shoot',
                duration: 4
            }]
        }]
    },
    getServiceById: (serviceId: string) => {
        return {
            id: 's1',
            title: 'Wedding',
            included: [{
                id: 'Pre-wedding',
                title: 'Pre-wedding',
                duration: 4
            },
            {
                id: 'op2',
                title: 'Wedding eve',
                duration: 4
            }],
            addons: [{
                id: 'ad1',
                title: 'Kids shoot',
                duration: 4
            }]
        };
    }
}