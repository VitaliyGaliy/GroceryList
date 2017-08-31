import React from 'react'

const propTypes = {
  isEdit: React.PropTypes.bool
}


export class Header extends React.Component {
    constructor(props) {
    super(props);
      this.onEditSlide = this.onEditSlide.bind(this);
  }

  onEditSlide(e){
    this.props.editSlide()
  }

  render(){
    console.log('props', this.props);
    return(
      <div id='header'>
        <div className='phoneBar'>
          <div className='phoneBarItems'>
            <img src="/assets/TLE.png" alt=""/>
          </div>
          <div className='phoneBarItems phoneBarItemsClock'>
            <img src="/assets/clock.png" alt=""/>
          </div>
          <div className='phoneBarItems phoneBarItemsBattery'>
            <img src="/assets/battery.png" alt=""/>
          </div>
        </div>
        {
          this.props.isEdit
          ?
          <div className='itemContainer'>
            <div className='headerItems gear'>
              <h1>+</h1>
            </div>
            <div className='headerItems text'>
              <p style={{margin:0}}>Groceries</p>
            </div>
            <div className='headerItems edit' onClick={this.onEditSlide}>
              <p style={{margin:0}}>Done</p>
            </div>
          </div>
          :
          <div className='itemContainer'>
            <div className='headerItems gear'>
              <img src="/assets/gear.png" alt=""/>
            </div>
            <div className='headerItems text'>
              <p style={{margin:0}}>Groceries</p>
            </div>
            <div className='headerItems edit' onClick={this.onEditSlide}>
              <img src="/assets/edit.png" alt=""/>
            </div>
          </div>
        }
      </div>
    )
  }
}



Header.propTypes = propTypes
export default Header
