import React from 'react'
import Helmet from 'react-helmet'
import SwipeableViews from 'react-swipeable-views';



const propTypes = {
  isEdit: React.PropTypes.bool
}

export class SlidesList extends React.Component {
  constructor(props) {
  super(props);
    // this.handleChange = this.handleChange.bind(this);
}

  handleChange(e){
    // this.props.setText(e.target.value)
  }

  render() {
    return(
      <SwipeableViews style={{height:'100%'}}>
        <div className='leftSlide'>
          <div className="imageContaner">
            <img src="/assets/chart.png" alt=""/>
          </div>
          <div className="textContainer">
            <p>{this.props.slidesText}</p>
          </div>
        </div>
        <div className='leftSlide'>
          <div className="textContainer">
            <p>{this.props.slidesText}</p>
          </div>
          <div className="imageContaner imageContanerRight">
            <img src="/assets/home.png" alt=""/>
          </div>
        </div>
      </SwipeableViews>
    )
  }
}

export default SlidesList
