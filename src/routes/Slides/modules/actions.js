import { CALL_API } from 'redux-api-middleware'
import { consts } from './consts'
// import сonfig from '../config'
//
// const host = сonfig.apihost

// ------------------------------------
// Actions
// ------------------------------------

export const editSlide = () => (dispatch, getState) => {
  return dispatch({ type: consts.EDIT_SLIDE, payload: !getState().slides.isEdit})
}

export const setText = t => (dispatch, getState) => {
  return dispatch({ type: consts.SET_TEXT, payload: t})
}



export const actions = {
  editSlide,
  setText,
}

export default actions
