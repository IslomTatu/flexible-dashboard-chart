import { put, call, takeLatest, delay } from 'redux-saga/effects'
import * as chartTypes from '../../contants'
import { push } from 'connected-react-router';
import { api } from '../../apis';


function* workerResizeChart({ sizes }){
    try{
        yield delay(1000)
        yield put({ type: chartTypes.RESIZE_CHART_SUCCESS, payload: sizes })
        yield put(push("/"))
    }
    catch(err){

    }
}

function* workerCountChange({ counts }){
    try{
        yield put({ type: chartTypes.CHANGE_COUNT_SUCCESS, payload: counts })
    }
    catch(err){

    }
}

// TODO ERRORS

function* workerGetZones() {
    try{
        const zones = yield call(api.widget.getZones)
        
        yield put({ type: chartTypes.GET_ZONES_SUCCESS, payload: zones.data.items })

    }
    catch(err){

        yield put({ type: chartTypes.GET_ZONES_FAIL })

    }
}

function* workerGetBlurs({ data }) {
    try{
        const blurs = yield call(api.widget.getBlurs, data)

        yield put({ type: chartTypes.GET_BLURS_SUCCESS, payload: blurs.data.items })
    }
    catch(err){

    }
}

function* workerGetLocations(){
    try{
        const locations = yield call(api.widget.getLocations)

        // console.log(locations.data)

        yield put({ type: chartTypes.GET_LOCATIONS_SUCCESS, payload: locations.data.items })
    }
    catch(err){

    }
}

function* workerGetBrands(){
    try{
        const brands = yield call(api.widget.getBrands)

        // console.log('brands: ', brands.data )

        yield put({ type: chartTypes.GET_BRANDS_SUCCESS, payload: brands.data.items })
    }
    catch(err){

    }
}

function* workerGetCashDesks(){
    try{
        const cashDesks = yield call(api.widget.getCashDesks)

        // console.log('cashdesk: ', cashDesks.data )

        yield put({ type: chartTypes.GET_CASH_DESKS_SUCCESS, payload: cashDesks.data.items })

    }
    catch(err){
        
    }
}

function* workerAddWidget({ data }){
    try{

        // if(data.style === 'count'){
        //     const count = {
        //         maxWIdth: window.innerWidth - 100,
        //         value: "309",
        //         title: data.type,
        //         period: data.period,
        //         compare: '+10%',
        //     }
        //     yield put({ type: chartTypes.ADD_COUNT, payload: count })
        // }
        // else{
        //     const chart = {
        //         width: 400,
        //         height: 300,
        //         type: data.type,
        //         period: data.period,
        //         style: data.style
        //     }
        //     yield put({ type: chartTypes.ADD_CHART, payload: chart })
        // }

        const widget = yield call(api.widget.addWidget, data)

        console.log('DATA: ', widget.data)

    }
    catch(err){

        console.log("ERROR: ", err)

    }
}


function* workerRemoveChart({ id, style }){
    try{
        if(style === "chart"){
            yield put({ type: chartTypes.REMOVE_CHART_SUCCESS, payload: id })
        }
        else{
            yield put({ type: chartTypes.REMOVE_COUNT_SUCCESS, payload: id })
        }

    }
    catch(err){

        yield put(chartTypes.REMOVE_CHART_FAIL)

    }
}

export default function* watcherWidgetSaga() {
    yield takeLatest(chartTypes.RESIZE_CHART, workerResizeChart)

    yield takeLatest(chartTypes.CHANGE_COUNT, workerCountChange)

    yield takeLatest(chartTypes.GET_ZONES, workerGetZones)

    yield takeLatest(chartTypes.GET_BLURS, workerGetBlurs)

    yield takeLatest(chartTypes.GET_LOCATIONS, workerGetLocations)

    yield takeLatest(chartTypes.GET_BRANDS, workerGetBrands)

    yield takeLatest(chartTypes.GET_CASH_DESKS, workerGetCashDesks)

    yield takeLatest(chartTypes.ADD_WIDGET, workerAddWidget)

    yield takeLatest(chartTypes.REMOVE_CHART, workerRemoveChart)

} 


function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}