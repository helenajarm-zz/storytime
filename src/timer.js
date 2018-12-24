import React, {Component}from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: 24,
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 2000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    if(this.state.elapsed > 0) {
      this.setState({
      elapsed: this.state.elapsed - 1
    });

  }

    if(this.state.elapsed == 0){
      this.setState({ elapsed: 0 });
      if (this.props.place < 15 ){
        console.log("hey");
        if(alert('Uh oh! Time has run out. Want to try again?')){
        }
        else{
            window.location.reload();

        }
      }

    }

  }

  render () {
   return(

     <div>
      <a className="right">{this.state.elapsed} hours left ::</a>
    </div>

  );
  }
}
export default Timer;
