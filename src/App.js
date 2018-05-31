import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
  	super();
  		
  		this.state = {number:0}
  		this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value,
    	number:event.target.value? event.target.value.length : 0
    });
  }

  render() {
    return (
      <div className="container">
        <textarea value={this.state.value} onChange={this.handleChange}  rows="3"></textarea>
        <div className="counter">{this.state.number}</div>
      </div>
    );
  }

}

export default App;
