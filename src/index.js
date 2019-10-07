import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import MomentUtils from '@date-io/moment/build';
import './css/oxDashboard.css'

import App from './App';

import { MuiPickersUtilsProvider } from 'material-ui-pickers';

const root = document.getElementById('root')

if (!!root) {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <App />
          </MuiPickersUtilsProvider>
      </ConnectedRouter>
    </Provider>,
    root
  );
}
