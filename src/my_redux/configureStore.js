import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

let composeEnhancers = compose

const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
if (typeof composeWithDevToolsExtension === 'function') {
  composeEnhancers = composeWithDevToolsExtension
}

if (window.devToolsExtension) {
  window.devToolsExtension.open()
}

const middleawares = [thunk]

let enhancers = []

export default function configureStore(preloadedState) {
  return createStore(rootReducer,
                          undefined,
                          composeEnhancers(
                            applyMiddleware(...middleawares),
                            ...enhancers
                          )
                        )
}
