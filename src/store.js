import {createBrowserHistory} from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import rootSaga from './sagas'

import { auth_check } from './actions/auth'



export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()



const middleware = [
    routerMiddleware(history),
    sagaMiddleware
]

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose

// const composeEnhancers = compose

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
)

const store = createStore(
    rootReducer(history),
    enhancer
)

sagaMiddleware.run(rootSaga)

store.dispatch(auth_check())


export default store