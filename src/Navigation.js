import React, {Component}from 'react';


class Navigation extends Component {
  render () {

   return(
     <div className="row z-3">
       <div id="navigation" className={this.props.button1position}>
         <button  onClick={this.props.navigatePrimary}>{this.props.button1}</button>
      </div>
      <div className={this.props.button2position}>
         <button  onClick={this.props.navigateSecondary}>{this.props.button2}</button>
      </div>
    </div>

  );
  }
}
export default Navigation;
