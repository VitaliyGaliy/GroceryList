import React from 'react'

const propTypes = {
}

const defaultProps = {
}

export class Footer extends React.Component {
  constructor(props) {
  super(props);
  this.onSlideChange = this.onSlideChange.bind(this);
}

onSlideChange(e){
  const index = e.currentTarget.getAttribute('data-myAttr');
  // this.props.slideChange(index)
}

  render() {
    return(
      <div id='footer'>
        <div className='footerItems allGroceries'
          data-myAttr='0'
          onClick={this.onSlideChange}>
          <img src="/assets/footerRight.png" alt=""/>
        </div>
        <div className='footerItems chart'
          data-myAttr='1'
          onClick={this.onSlideChange}>
          <img src="/assets/chartFooter.png" alt=""/>
        </div>
      </div>
    )
  }
}

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps
export default Footer
