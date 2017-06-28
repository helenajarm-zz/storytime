import React, { Component } from 'react';
import octopus from './pic/octopus.jpg';


const text = [
  "hello",
  "goodbye",
  "forever",
  "and",
  "ever"
];

class Source extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 3,
      array: text
    };
  }

  render() {
    return (
      <p>{text}</p>
    );
    }
}


export default Source;
