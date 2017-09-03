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
  [consts.FILTERED_SLIDES]: (state, action) => ({ ...state, filteredSlides: action.payload }),

  [consts.CHANGE_SLIDE]: (state, action) => {
    const editetslidesList = state.slidesList.map(s => {
        if(s.id === action.payload.id) {
          let index = s.index;
          return {...s, index: action.payload.index}
        }else{
          return s
        }
    })
    return {...state, slidesList: editetslidesList}
  },

  [consts.SET_TEXT]: (state, action) => {

    const editetslidesList = state.slidesList.map(s => {
        if(s.id === action.payload.id) {
          const text = s.text;
          return {...s, text: action.payload.text}
        }else{
          return s
        }
    })
    return {...state, slidesList: editetslidesList}
  },

  [consts.ADD_SLIDE]: (state, action) => {
    return{ ...state, slidesList:[...state.slidesList, {...action.payload, index:0}]
  }},

  [consts.DELETE_SLIDE]: (state, action) => {
    const newSlidesArray = state.slidesList.filter(s => {
      if (s.id !== action.payload) return s
    })
    return { ...state, slidesList: newSlidesArray}
  }
}

export const reducers = (state = initial, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducers
