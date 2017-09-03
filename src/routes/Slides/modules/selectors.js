import { createSelector } from 'reselect'

export const getIsEdit = state => state.slides.isEdit
export const getSlidesList = state => state.slides.slidesList
export const getFilter = state => state.slides.filteredSlides

export const getFilteredSlidesList = createSelector(
  [getSlidesList, getFilter],
  (slides, f) => {
    debugger
    return f == 'all' ?
             slides :
             slides.filter(s => { if(s.index === 1) return s })
  }
)


export default {
  getIsEdit,
  getSlidesList,
  getFilteredSlidesList,
}
