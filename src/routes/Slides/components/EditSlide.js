import React, { PropTypes } from 'react'

const propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export class EditSlide extends React.Component {
    constructor(props) {
    super(props);
      this.handleChange = this.handleChange.bind(this);
      this.onBlur = this.onBlur.bind(this);
      this.onDelete = this.onDelete.bind(this);
      this.state={text:''}
  }

    componentWillMount() {
      this.setState({text:this.props.text})
    }

    handleChange(e){
      this.setState({text:e.target.value})
    }

    onDelete(){
      this.props.deleteSlide(this.props.id)
    }

    onBlur(e){
      const text = this.state.text;
      const id = this.props.id;
      this.props.setText({text, id})
    }

    render(){
      return (
        <div className='leftSlide' >
          <div className="imageContaner imageContanerDelete" onClick={this.onDelete}>
            <p>Delete</p>
          </div>
          <div className="textContainer">
            <input value={this.state.text}
                   onChange={this.handleChange}
                   onBlur={this.onBlur}/>
          </div>
        </div>
      )
    }
  }


export default EditSlide
