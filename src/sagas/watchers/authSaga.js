import { put, call, takeLatest } from "redux-saga/effects"
import * as authType from '../../contants'
import { api } from "../../apis";
import setAuthorizationHeader from "../../utils/setAuthorizationHeader";


function* workerAuthCheck(){
    try{
        const token = yield call(api.auth.checkAuth)
        setAuthorizationHeader(token.data)
    }
    catch(err){
        
    }
}

export default function* watcherAuthSaga() {

    yield takeLatest(authType.AUTH_CHECK, workerAuthCheck)
}