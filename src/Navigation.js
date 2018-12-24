import React, {Component}from 'react';


class Navigation extends Component {
  render () {

   return(

     <div id="Buttons" onClick={this.props.progress}>
       <a className="lowopacity" onClick={this.props.choice1}>{this.props.button1copy}</a>
       <a className="right" href={this.props.link} onClick={this.props.choice2}>{this.props.button2copy}</a>
    </div>

  );
  }
}
export default Navigation;
