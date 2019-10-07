import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import widgets from './widgetReducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    widgets
})
