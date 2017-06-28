import React, {Component}from 'react';


class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
   return(
     <div>
       <div className="row z-1">
         <div className={"pic-item" + this.props.image1position}>
                  <img src={this.props.image1} alt="sd"/>
        </div>
      </div>
      <div className="row z-1">
          <div className={"pic-item" + this.props.image2position}>
                  <img src={this.props.image2} alt="sd"/>
          </div>
      </div>
  </div>

  );
  }
}
export default Image;
