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
  // console.log('filteredSlidesList', props.filteredSlidesList;
  return(
    <div className='sladesWrapper'>
        <div className='slides'>
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
            slidesList.map( s => (
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
