import React, {Component}from 'react';


class Navigation extends Component {
  render () {

   return(

     <div className="Buttons" onClick={this.props.progress}>
       <button className="lowopacity" onClick={this.props.choice1}>{this.props.button1copy}</button>
       <button className="right" onClick={this.props.choice2}>{this.props.button2copy}</button>

    </div>

  );
  }
}
export default Navigation;
