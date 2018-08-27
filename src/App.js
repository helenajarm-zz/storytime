import React  from 'react';
import './App.css';
import './flexboxgrid.css';
import Image from './Image'
import Navigation from './Navigation'
import Timer from './timer'
import Content from './Content'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 0,
      nextplace: 1,
      class: "none",
    };
    this.choice1 = this.choice1.bind(this);
    this.choice2 = this.choice2.bind(this);
    this.progress = this.progress.bind(this);
  }

  begin(){
    this.setState({place: 0});
    this.setState({class: "none" });
  }

  progress(){
    if (this.state.place > 15){
      this.setState({class: "End" });
    }
  }

  choice1(){
    this.setState({place: Content[this.state.place].choice1});
  }

  choice2(){
    this.setState({place: Content[this.state.place].choice2});
  }

  forward(){
    if ( this.state.place < Content.length - 2){
      this.setState({ place: this.state.place + 1,nextplace: this.state.place + 2});
    }
}



  render() {

    return (


    <div>
      <div className="Nav">
        <a className="left">Valdivia, 2100 BC</a>
        <a className="right" href="{this.begin}"> Start over</a>
        <Timer />
      </div>

      <div className="Scene">

        <ReactCSSTransitionGroup component="div" className="row z-2"
              transitionName="copyfade"
              transitionAppear={true}
              transitionAppearTimeout={1300}
              transitionEnterTimeout={1300}
              transitionLeaveTimeout={300}>
              <div key={Content[this.state.place].copyposition} className={"Copy" + " " + this.state.class + Content[this.state.place].copyposition}>
                <div className="Title">{Content[this.state.place].title}</div>
                <p>
                    {Content[this.state.place].copy} <br/> <br/>
                    {Content[this.state.place].copy2}

                </p>
                <Navigation
                  progress={this.progress}
                  choice1={this.choice1}
                  choice2={this.choice2}
                  link={Content[this.state.place].link}

                  button1copy={Content[this.state.place].button1copy}
                  button2copy={Content[this.state.place].button2copy}

                />

              </div>

        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup component="div" className="row z-1"
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={900}
        transitionEnterTimeout={900}
        transitionLeaveTimeout={100}>
           <Image
             key={Content[this.state.place].image1}
             imagePosition={Content[this.state.place].image1position}
             image={Content[this.state.place].image1}
             boxShadow={Content[this.state.place].boxShadow1}
           />
           <Image
             key={Content[this.state.place].image2}
             imagePosition={Content[this.state.place].image2position}
             image={Content[this.state.place].image2}
             boxShadow={Content[this.state.place].boxShadow2}
           />
        </ReactCSSTransitionGroup>

      </div>
    </div>

    );
  }
}
export default App;
