import { satellite } from './index'

const widgetApi = {
    
    getZones: () => satellite.get('/zones'),

    getBlurs: type => satellite.get(`/${type}`),

    getLocations: () => satellite.get('/locations'),

    getBrands: () => satellite.get('/brands'),

    getCashDesks: () => satellite.get('/cash-desks'),

    addWidget: (data) => satellite.post('/graphics', data)
    
}

export default widgetApi