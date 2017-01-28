import React, { Component } from 'react';
import './App.css';
import { Router, Route, browserHistory } from 'react-router'
import MainPageSuperContainer from './MainPageSuperContainer'
import RestaurantFullPageSuperContainer from './RestaurantFullPageSuperContainer'
import ReduxTestComponent from './ReduxTestComponent'


class AppContainer extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/(:filter)" component={MainPageSuperContainer}/>
        <Route path="/spotlight/:placeID" component={RestaurantFullPageSuperContainer}/>
      </Router>
    );
  }
}

export default AppContainer;
