import React, {Component}from 'react';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true,
      title: "SOUND OFF",

    };
    this.play = this.play.bind(this);
  }

  play(){
    if (this.state.play) {
      this.setState({ play: false });
      this.setState({ title: "SOUND ON"});
      this.audio.pause();
    } else {
      this.setState({ play: true });
        this.setState({ title: "SOUND OFF"});
      this.audio.play();
    }
  };


  render () {
   return(
     <div>
       <audio src="audio/audio.ogg"
         ref={(audio) => { this.audio = audio }}
         autoPlay
       />
       <a className="right" onClick={this.play} >{this.state.title}</a>

   </div>
     );
   }
}

export default Player;
