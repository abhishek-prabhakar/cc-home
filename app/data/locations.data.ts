enum LOCATION_CODE {
    BLR = 'BLR',
    BOM = 'BOM',
    DEL = 'DEL'
}

const locationMap = {
    [LOCATION_CODE.BLR]: 'Bangalore',
    [LOCATION_CODE.BOM]: 'Mumbai',
    [LOCATION_CODE.DEL]:'Delhi'
}

const locationList = [
    {
        label: 'Bangalore',
        key: LOCATION_CODE.BLR,
        available: true
    },
    {
        label: 'Mumbai',
        key: LOCATION_CODE.BOM,
        available: false

    },
    {
        label: 'Delhi',
        key: LOCATION_CODE.DEL,
        available: false
    },
];

export {LOCATION_CODE, locationList, locationMap}