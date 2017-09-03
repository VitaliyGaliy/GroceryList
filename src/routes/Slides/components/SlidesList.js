import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'
import SwipeableViews from 'react-swipeable-views';

const propTypes = {
  text: PropTypes.string.isRequired,
}

export const SlidesList = (props) => {
    return(
      <SwipeableViews style={{height:'100%'}}
        onChangeIndex={(index) => props.slideChange({index, id:props.id})}>
        <div className='leftSlide'>
          <div className="imageContaner">
            <img src="/assets/chart.png" alt=""/>
          </div>
          <div className="textContainer">
            <p>{props.text}</p>
          </div>
        </div>
        <div className='leftSlide'>
          <div className="textContainer">
            <p>{props.text}</p>
          </div>
          <div className="imageContaner imageContanerRight">
            <img src="/assets/home.png" alt=""/>
          </div>
        </div>
      </SwipeableViews>
    )

    }

export default SlidesList
