import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {loadingBarReducer} from 'react-redux-loading-bar'

import Slides from '../routes/Slides/modules'


// Fix: "React-Redux: Combining reducers: Unexpected Keys"
// http://stackoverflow.com/a/33678198/789076
const initialReducers = {
  [Slides.consts.KEY]: (state = Slides.initial) => state,
}

export const makeRootReducer = (asyncReducers) => combineReducers({
  // Add sync reducers here
  router,
  // app reducers
  loadingBar: loadingBarReducer,
  ...initialReducers,
  [Slides.consts.KEY]: Slides.reducers,
  ...asyncReducers,
})

export const injectReducer = (store, {key, reducer}) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
