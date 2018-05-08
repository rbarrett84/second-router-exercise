import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Greeting from './components/Greeting'
import Goodbye from './components/Goodbye'
import NavBar from './components/NavBar'
import CustomGreeting from './containers/CustomGreeting'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <h1>Create a Router Here</h1>
    )
  }
}

export default App;
