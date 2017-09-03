import { createSelector } from 'reselect'

export const getIsEdit = state => state.slides.isEdit
export const getSlidesList = state => state.slides.slidesList
export const getSlidesIndex = state => state.slides.index

export const getFilteredSlidesList = createSelector(
  [getSlidesList, getSlidesIndex],
  (slides, index) => {
    return index == 0 ?
             slides :
             slides.filter(s => { if(s.index === index) return s })
  }

)


export default {
  getIsEdit,
  getSlidesList,
  getSlidesIndex,
  getFilteredSlidesList,
}
