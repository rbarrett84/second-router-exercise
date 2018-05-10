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
      <Router history={browserHistory}>
          <Route path='/' component={NavBar} name='Nav Bar' >
          <Route path='Greeting' component={Greeting} name='Greeting'/>
          <Route path='Goodbye' component={Goodbye} name='Greeting'/>
          <Route path='Custom' component={CustomGreeting} name='Custom Greeting'/>
      </Route>
    </Router>

    )
  }
}

export default App;
