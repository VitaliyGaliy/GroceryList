import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import SwipeableViews from 'react-swipeable-views';
import classes from './Slides.scss'


const propTypes = {
  isEdit: React.PropTypes.bool
}

export class Slides extends React.Component {
  constructor(props) {
  super(props);
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(e){
    this.props.setText(e.target.value)
  }

  render() {
    console.log('setText', this.props.slidesText);
    return(
      <div className='sladesWrapper'>
          <div className='slides'>
            {
              this.props.isEdit
              ?
              <div className='leftSlide'>
                <div className="imageContaner imageContanerDelete">
                  <p>Delete</p>
                </div>
                <div className="textContainer">
                  <input value={this.props.slidesText}
                         onChange={this.handleChange}/>
                </div>
              </div>
              :
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
            }
          </div>
      </div>
    )
  }
}

export default Slides
