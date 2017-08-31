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

  // [consts.SET_Q]: (state, action) => {
  //   const result = {
  //     ...state,
  //     q: action.payload,
  //     p: 1,
  //     searchNotFound: false,
  //     // agenda: [],
  //   }
  //   if (action.payload.length < 3) {
  //     result.searchId = []
  //   }
  //   return result
  // },
  // [consts.SET_P]: (state, action) => ({
  //   ...state,
  //   p: action.payload,
  //   agenda: [],
  // }),
  // [consts.SET_PAGE_ROWS]: (state, action) => ({
  //   ...state,
  //   pageRows: action.payload,
  //   agenda: [],
  // }),
  // [consts.FETCH_AGENDA_LIST_REQUEST]: state => ({
  //   ...state,
  //   fetchings: { ...state.fetchings, agenda: true },
  // }),
  // [consts.FETCH_AGENDA_LIST_FAILURE]: state => ({
  //   ...state,
  //   fetchings: { ...state.fetchings, agenda: false },
  // }),
  // [consts.FETCH_AGENDA_LIST_SUCCESS]: (state, action) => {
  //   const result = {
  //     ...state,
  //     fetchings: { ...state.fetchings, agenda: false },
  //   }
  //   console.log('got agenda', action.payload.items)
  //   if (action.payload) {
  //     if (arr.isArray(action.payload.items) && action.payload.items.length) {
  //       // result.agenda = action.payload.items
  //       result.agenda = [...state.agenda, ...action.payload.items]
  //     }
  //     result.agendaCount = parseInt(action.payload.items_in_selection, 10)
  //   }
  //   return result
  // },
  // [consts.FETCH_AGENDA_SEARCH_REQUEST]: state => ({
  //   ...state,
  //   fetchings: { ...state.fetchings, search: true },
  //   searchNotFound: false,
  // }),
  // [consts.FETCH_AGENDA_SEARCH_FAILURE]: state => ({
  //   ...state,
  //   fetchings: { ...state.fetchings, search: false },
  //   searchNotFound: true,
  // }),
  // [consts.FETCH_AGENDA_SEARCH_SUCCESS]: (state, action) => {
  //   const result = { ...state, fetchings: { ...state.fetchings, search: false } }
  //   console.log('SR', action.payload.items)
  //   if (action.payload) {
  //     if (arr.isArray(action.payload.items)) {
  //       result.searchResult = [...action.payload.items]
  //       result.searchNotFound = false
  //       if (!action.payload.items.length) {
  //         result.searchNotFound = true
  //       }
  //     }
  //     // result.monumentsCount = parseInt(action.payload.items_in_selection, 10)
  //   }
  //   return result
  // },
  // [consts.FETCH_AGENDA_ID_REQUEST]: state => ({ ...state, isFetching: true, }),
  // [consts.FETCH_AGENDA_ID_FAILURE]: state => ({ ...state, isFetching: false }),
  // [consts.FETCH_AGENDA_ID_SUCCESS]: (state, action) => {
  //   const result = { ...state, isFetching: false }
  //   if (action.payload) {
  //     if (arr.isArray(action.payload.items) && action.payload.items.length) {
  //       const item = action.payload.items.find(() => true)
  //       // console.log(action.payload, state.id)
  //       // result.agendaItem = action.payload.items.shift()
  //       result.agendaItem = { ...result.agendaItem, [state.id]: item }
  //     }
  //   }
  //   return result
  // },
  // [consts.CLEAR_SEARCH]: state => ({
  //   ...state,
  //   fetchings: { ...state.fetchings, search: false },
  //   q: '',
  //   searchResult: [],
  //   searchNotFound: false,
  // }),
}

export const reducers = (state = initial, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducers
