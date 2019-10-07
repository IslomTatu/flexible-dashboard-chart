import * as chartTypes  from "../contants";


export const resizeChart = (sizes) => ({ type: chartTypes.RESIZE_CHART, sizes })

export const changeCount = (counts) => ({ type: chartTypes.CHANGE_COUNT, counts })

export const getZones = () => ({ type: chartTypes.GET_ZONES })

export const getBlurs = (data) => ({ type: chartTypes.GET_BLURS, data })

export const getLocations = () => ({ type: chartTypes.GET_LOCATIONS })

export const getBrands = () => ({ type: chartTypes.GET_BRANDS })

export const getCashDesks = () => ({ type: chartTypes.GET_CASH_DESKS })

export const addWidget = (data) => ({ type: chartTypes.ADD_WIDGET, data })

export const removeChart = (id, style) => ({ type: chartTypes.REMOVE_CHART, id, style })