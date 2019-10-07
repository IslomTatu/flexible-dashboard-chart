import React from 'react';
import { Switch, Route } from 'react-router-dom'

// components
import MainPage from './pages/MainPage';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "bootstrap/dist/css/bootstrap.min.css"

import EditPage from './pages/EditPage';

const App = () => {

  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/edit" component={EditPage} />
        </Switch>

      </div>
    </div>

  )
}

export default App;
