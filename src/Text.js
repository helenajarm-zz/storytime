import React, {Component}from 'react';


class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
   return(
     <div className="Text">
       {this.props.text}
     </div>
  );
  }
}
export default Text;
