import React, {Component}from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class Image extends Component {
  constructor(props) {
    super(props);
    this.state={
      transform: 'scale(1)',
      z: 50,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.normalPic = this.normalPic.bind(this);
  }

  onMouseOver(e){
      this.setState({
        transform: 'scale(0.7)',
      });
  }

  normalPic(){
      this.setState({
        transform: 'scale(1)',
      })

  }

  render () {
   return(
       <div onMouseOver={this.onMouseOver} onMouseLeave={this.normalPic} className={"pic-item" + this.props.imagePosition} style={{transform: this.state.transform}}>
            <img src={this.props.image} alt="This is a missing photo"/>
      </div>

  );
  }
}
export default Image;
