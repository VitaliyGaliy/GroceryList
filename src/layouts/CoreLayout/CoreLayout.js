import React from 'react'
import LoadingBar from 'react-redux-loading-bar'

import HeaderContainer from '../../containers/Header/HeaderContainer'
import FooterContainer from '../../containers/Footer/FooterContainer'

export class CoreLayout extends React.Component {
  constructor(props) {
  super(props);
    // this.state = { width: '0', height: '0' };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

  componentWillMount() {
    // console.log('width', window.innerWidth);
    // this.setState({
    //   width: window.innerWidth*0.35
    // })
  }

  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener('resize', this.updateWindowDimensions);
  //
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  // }
  //
  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth*0.35 });
  // }
  render() {
    // console.log('width', window.innerHeight);
    return (
      <div id='wrapper'>
        <div id='centerContainer'>
          <div className='mobileSize' >
            <HeaderContainer />
            {this.props.children}
            <FooterContainer />
          </div>
        </div>
      </div>
    )
  }
}


CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default CoreLayout
