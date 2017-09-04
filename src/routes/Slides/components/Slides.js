import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'
import classes from './Slides.scss'
import SlidesList from './SlidesList'
import EditSlide from './EditSlide'

const propTypes = {
  isEdit: PropTypes.bool,
  setText: PropTypes.func.isRequired,
  slidesList: PropTypes.array.isRequired,
}

export const Slides = (props) => {
  const slidesList = props.slidesList || [];
  const setText = props.setText;
  const filteredSlidesList = props.filteredSlidesList;
  const slideBorder = slidesList.length == 0 ?
          {borderTop: 'none', borderBottom: 'none'}: null;
  return(
    <div className='sladesWrapper'>
        <div className='slides' style={slideBorder}>
          {
            props.isEdit
            ?
            slidesList.map( s => (
              <EditSlide
                key={s.id}
                id={s.id}
                text={s.text}
                setText={props.setText}
                deleteSlide={props.deleteSlide}
              />
            ))
            :
            filteredSlidesList.map( s => (
              <SlidesList
                key={s.id}
                text={s.text}
                id={s.id}
                slideChange={props.slideChange}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Slides
