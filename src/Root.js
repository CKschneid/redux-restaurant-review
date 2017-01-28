import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AppContainer from './AppContainer'
import {receiveRestaurants, fetchRestaurants} from './actions'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
