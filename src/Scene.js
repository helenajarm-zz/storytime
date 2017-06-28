import React, {Component, PropTypes}from 'react';
import App from './App'


class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render () {
   return(
       <div className="Base">
          <div className="Text">
            {this.props.text}
          </div>
          {this.props.pictureVisible &&
          <div className="mainImage">
              <img src={this.props.image}alt="sd"/>
          </div> }
      </div>
  );
  }
}
export default Scene;
