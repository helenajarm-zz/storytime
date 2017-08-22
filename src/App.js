import React  from 'react';
import './App.css';
import './flexboxgrid.css';
import Image, {Images} from './Image'
import Navigation from './Navigation'
import Content from './Content'


const Colors = [
  "blue","black","red","yellow","orange"
];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 0,
      nextplace: 1,
      numberOfImages:1,
      pictureVisible: true,
      bgColor: Colors[0],
    };
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    //this.random = this.random.bind(this);
    this.addPicture = this.addPicture.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(){
    this.setState({
      bgColor: Colors[Math.floor(Math.random() * 4) + 0],
    });
  }


  forward(){
    this.changeColor();
    if ( this.state.place < Content.length - 2){
      this.setState({ place: this.state.place + 1,nextplace: this.state.place + 2});
    }
    else if( this.state.place == Content.length - 2){
      this.setState({ place: this.state.place + 1,nextplace: 0});
      console.log(this.state.place);
      console.log(Content.length);
    }
    else{
      this.setState({ place: 0, nextplace: 1});
    }
}

  backward(){
    this.changeColor();
    if( this.state.place == 0){
      this.setState({ place: Content.length - 1});
    }
    else{
      this.setState({ place: this.state.place - 1 });
    }
  }

  //random(){
    //this.setState({
      //place: Math.floor(Math.random() * 5) + 0,
    //});
  //}

  addPicture(){
    this.setState({
       numberOfImages: this.state.numberOfImages + 1,
     });
  }


  toggle(){
    this.setState({
      pictureVisible: this.pictureVisible = !this.state.pictureVisible,
    });
  }



  render() {
    let images =[];
    if (this.state.pictureVisible){
      for (let i = 0; i < this.state.numberOfImages; i += 1) {
        images.push(<Images
          key={i}
          boxShadow1={Content[this.state.place].boxShadow1}
          boxShadow2={Content[this.state.place].boxShadow2}
          image1={Content[this.state.place].image1}
          image1position={Content[this.state.place].image1position}
          image2={Content[this.state.place].image2}
          image2position={Content[this.state.place].image2position}/>);
      }
    }

    return (
      <div className="Scene">
        <div className="Title">
          <p> In Japan </p>
          <div onClick={this.backward}>{Content[this.state.place].title}</div>
          <div className="secondaryTitle"  onClick={this.forward}>{Content[this.state.nextplace].title}</div>
        </div>

        {images}

        <div className="row z-2">
          <div className={"Copy" + Content[this.state.place].copyposition}>{Content[this.state.place].copy} <br /><br /> {Content[this.state.place].copy2}</div>
        </div>

        <Navigation
          navigatePrimary={this.forward}
          button1={Content[this.state.place].button1}
          button1position={Content[this.state.place].button1position}
          navigateSecondary={this.backward}
          button2={Content[this.state.place].button2}
          button2position={Content[this.state.place].button2position}
          /*addPicture={this.addPicture}  toggle={this.toggle}*/
        />
      </div>

    );
  }
}

export default App;
