import _ from 'lodash'
// import { arr, obj } from '../../../modules/utils'
// ------------------------------------
// Constants
// ------------------------------------
import { consts } from './consts'
// ------------------------------------
// Initial State
// ------------------------------------
import { initial } from './initial'
// ------------------------------------
// Action Handlers
// ------------------------------------
export const actionHandlers = {
  [consts.EDIT_SLIDE]: (state, action) => ({ ...state, isEdit: action.payload }),
  [consts.SET_TEXT]: (state, action) => ({ ...state, slidesText: action.payload }),
  [consts.ADD_SLIDE]: (state, action) => ({ ...state, slidesList:[...state.slidesList, action.payload]}),

}

export const reducers = (state = initial, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducers
