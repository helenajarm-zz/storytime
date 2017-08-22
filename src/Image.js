import React, {Component}from 'react';


export const Images = ({image1,image1position, image2, image2position, boxShadow1, boxShadow2}) => (
  <div className="row z-1">
    <Image
      imagePosition={image1position}
      image={image1}
      boxShadow={boxShadow1}
    />
    <Image
      imagePosition={image2position}
      image={image2}
      boxShadow={boxShadow2}
    />
  </div>
)


class Image extends Component {
  constructor(props) {
    super(props);
    this.state={
      transform: 'rotate3d(0,0,0,0deg)',
      z: 50,
      mouseX: 0,
      mouseY: 0,
      rotateX: 0,
      rotateY: 0,
      rotate: 40,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.normalPic = this.normalPic.bind(this);
  }


  onMouseOver(e){
      this.setState({
        mouseX: e.screenX,
        mouseY: e.screenY,
        rotateX: (e.screenX/2-this.state.mouseX)/e.screenX*this.state.rotate,
        rotateY: (e.screenY/2-this.state.mouseY)/e.screenY*this.state.rotate,
        transform: 'perspective(525px) translateZ(' + this.state.z + 'px) rotateX(' + this.state.rotateX + 'deg) rotateY('+ this.state.rotateY + 'deg)',
      });
      console.log(this.state.x, this.state.y);
  }

  normalPic(){
      this.setState({
        transform: 'rotate3d(0,0,0,0deg)',
      })

  }

  render () {
   return(
       <div onMouseOver={this.onMouseOver} onMouseLeave={this.normalPic} className={"pic-item" + this.props.imagePosition} style={{transform: this.state.transform}}>
            <img style={{'box-shadow': this.props.boxShadow}} src={this.props.image} alt="a missing you is worth no words"/>
      </div>

  );
  }
}
export default Image;
