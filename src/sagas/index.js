import { fork, all } from 'redux-saga/effects'

import watcherWidgetSaga from './watchers/widgetSaga'
import watcherAuthSaga from './watchers/authSaga'

export default function* root() {
    yield all([
        fork(watcherWidgetSaga),
        fork(watcherAuthSaga)
    ])
}