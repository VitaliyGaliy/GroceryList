import React from 'react'

const propTypes = {
}

const defaultProps = {
}

export const Footer = (props) => (
  <div id='footer'>
    <div className='footerItems allGroceries'>
      <img src="/assets/footerRight.png" alt=""/>
    </div>
    <div className='footerItems chart'>
      <img src="/assets/chartFooter.png" alt=""/>
    </div>
  </div>
)

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps
export default Footer
