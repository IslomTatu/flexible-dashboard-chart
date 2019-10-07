import * as chartTypes from '../contants'
import createReducer from '../utils/createReducer';

const initialState = {
    loading: false,
    submittedCount: false,
    submittedChart: false,
    charts: [
        {
            id: 1,
            width: 700,
            height: 300,
            className: '',
            type: 'Sales by location',
            period: 'this month',
            style: 'basic_line',
            position: {
                i: "1", x: 0, y: 0, w: 8, h: 3
            }
        },
        {
            id: 2,
            width: 500,
            height: 250,
            style: 'pie',
            className: '',
            type: 'Customers by brands',
            period: 'this week',
            position: {
                i: "2", x: 8, y: 0, w: 4, h: 3
            }
        },
        {
            id: 3,
            width: 300,
            height: 300,
            style: 'basic_column',
            className: '',
            type: 'Financial operations',
            period: 'this week',
            position: {
                i: "3", x: 0, y: 3, w: 8, h: 3
            }
        },
        {
            id: 4,
            width: 400,
            height: 250,
            className: '',
            style: 'heat_map',
            type: 'Sales by product category',
            period: 'this year',
            position: {
                i: "4", x: 8, y: 3, w: 4, h: 3
            }
        },
        {
            id: 5,
            width: 400,
            height: 300,
            className: '',
            type: 'Net sales vs target sales by sellers',
            period: 'last month',
            style: 'stacked',
            position: {
                i: "5", x: 0, y: 6, w: 8, h: 3
            }
        },
        {
            id: 6,
            width: 400,
            height: 300,
            style: 'spiderweb',
            className: '',
            type: 'Net sales vs target sales by locations',
            period: 'this month',
            position: {
                i: "6", x: 8, y: 6, w: 4, h: 3
            }
        },
        {
            id: 7,
            width: 400,
            height: 300,
            className: '',
            type: 'Payment method by location',
            period: 'this week',
            style: 'table',
            position: {
                i: "7", x: 0, y: 9, w: 8, h: 3
            }
        },
        {
            id: 8,
            width: 400,
            height: 300,
            className: 'bglinechartCw',
            type: 'Visitors',
            period: 'this week',
            style: 'bg_line',
            position: {
                i: "8", x: 8, y: 9, w: 4, h: 3
            }
        },
        {
            id: 9,
            width: 400,
            height: 300,
            className: '',
            type: 'Sales',
            period: 'this week',
            style: 'multiple_yaxis',
            position: {
                i: "9", x: 0, y: 12, w: 8, h: 3
            }
        },
    ],
    counts: [
        {
            id: 1,
            maxWidth: window.innerWidth - 100,
            className: 'netSalesCw',
            value: "3200",
            title: "Net sales",
            period: "this month",
            compare: "-3%",
            position: {
                i: '1', x: 0, y: 0, w: 3, h: 1.5
            }
        },
        {
            id: 2,
            maxWidth: window.innerWidth - 100,
            className: "newCustomerCw",
            value: "10200",
            title: "New customers",
            period: "this week",
            compare: "+5%",
            position: {
                i: '2', x: 3, y: 0, w: 3, h: 1.5
            }
        },
        {
            id: 3,
            className: "grossMarginCw",
            value: "300000023",
            title: "Gross margin",
            period: "this month",
            compare: "+35%",
            position: {
                i: '3', x: 6, y: 0, w: 3, h: 1.5
            }
        },
        {
            id: 4,
            className: "sellThroughCw",
            value: "9230000.23",
            title: "Sell-through",
            period: "this day",
            compare: "-15%",
            position: {
                i: '4', x: 9, y: 0, w: 3, h: 1.5
            }
        },
        {
            id: 5,
            className: "atvCw",
            value: "93400900",
            title: "ATV",
            period: "this week",
            compare: "+40%",
            position: {
                i: '5', x: 9, y: 0, w: 3, h: 1.5
            }
        },
        {
            id: 6,
            className: "uptCw",
            value: "2.4",
            title: "UPT",
            period: "this month",
            compare: "-6%",
            position: {
                i: '5', x: 9, y: 0, w: 3, h: 1.5
            }
        },
    ],
    zones: [],
    locations: [],
    brands: [],
    cashDesks: [],
    blurs: []
}

const reducers = {
    [chartTypes.RESIZE_CHART](state) {
        return {
            ...state,
            loading: true
        }
    },
    [chartTypes.RESIZE_CHART_SUCCESS](state, { payload }) {
        return {
            ...state,
            charts: payload,
            loading: false
        }
    },
    [chartTypes.CHANGE_COUNT_SUCCESS](state, { payload }) {
        return {
            ...state,
            counts: payload,
            loading: false
        }
    },
    // ZONES
    [chartTypes.GET_ZONES_SUCCESS](state, { payload }) {
        return {
            ...state,
            zones: payload
        }
    },

    // BLURS (BRANDS, LOCATIONS, USERS, ROLES)
    [chartTypes.GET_BLURS_SUCCESS](state, { payload }) {
        return {
            ...state,
            blurs: payload
        }
    },

    // Locations
    [chartTypes.GET_LOCATIONS_SUCCESS](state, { payload }) {
        return {
            ...state,
            locations: payload
        }
    },
    // Brands
    [chartTypes.GET_BRANDS_SUCCESS](state, { payload }) {
        return {
            ...state,
            brands: payload
        }
    },
    // Cash Desks
    [chartTypes.GET_CASH_DESKS_SUCCESS](state, { payload }) {
        return {
            ...state,
            cashDesks: payload
        }
    },

    // remove
    [chartTypes.REMOVE_CHART_SUCCESS](state, {payload}){
        return {
            ...state,
            charts: state.charts.filter(chart => chart.id !== payload)
        }
    },
    [chartTypes.REMOVE_COUNT_SUCCESS](state, {payload}){
        return {
            ...state,
            counts: state.counts.filter(count => count.id !== payload)
        }
    },

    // ADD CHART
    [chartTypes.ADD_WIDGET](state){
        return {
            ...state,
            submittedCount: false,
            submittedChart: false,
        }
    },
    [chartTypes.ADD_CHART](state, { payload }){
        let charts = state.charts
        charts.push({
            ...payload,
            id: state.charts.length + 1,
            position: {i: (state.charts.length + 1).toString(), x: 0, y: 0, w: 8, h: 2}
        })
        return {
            ...state,
            submittedChart: true,
            charts: charts
        }
    },
    [chartTypes.ADD_COUNT](state, { payload }){
        let counts = state.counts
        counts.push({...payload, id: state.counts.length+1})
        return {
            ...state,
            submittedCount: true,
            counts: counts
        }
    }

}

export default createReducer(initialState, reducers)