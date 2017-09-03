import { connect } from 'react-redux'
import { actions } from '../modules/actions'
import slides from '../modules/selectors'
import Slides from '../components/Slides'

 const mapActionCreators = {
   ...actions,
 }


 const mapStateToProps = state => {

  return {
   isEdit: slides.getIsEdit(state),
   slidesList: slides.getSlidesList(state),
   slidesIndex: slides.getSlidesIndex(state),
   filteredSlidesList: slides.getFilteredSlidesList(state)
 }
}



export default connect(mapStateToProps, mapActionCreators)(Slides)
