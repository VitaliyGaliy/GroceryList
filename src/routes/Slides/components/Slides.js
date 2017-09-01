import React from 'react'
import Helmet from 'react-helmet'
import classes from './Slides.scss'
import SlidesList from './SlidesList'


const propTypes = {
  isEdit: React.PropTypes.bool
}

export class Slides extends React.Component {
  constructor(props) {
  super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state={text:''}
}

  handleChange(e){
    this.setState({text:e.target.value})
  }

  onBlur(e){
    this.props.setText(this.state.text)
  }


  render() {
    console.log('slidesList', this.props.slidesList);
    const slidesList = this.props.slidesList || [];
    return(
      <div className='sladesWrapper'>
          <div className='slides'>
            {
              this.props.isEdit
              ?
              slidesList.map( s => (
                <div className='leftSlide' key={s.id}>
                  <div className="imageContaner imageContanerDelete">
                    <p>Delete</p>
                  </div>
                  <div className="textContainer">
                    <input value={this.state.text}
                           onChange={this.handleChange}
                           onBlur={this.onBlur}/>
                  </div>
                </div>
              ))
              :

                slidesList.map( s => (
                      <SlidesList
                        key={s.id}
                        slidesText={this.props.slidesText}
                      />
                ))

            }
          </div>
      </div>
    )
  }
}

export default Slides
