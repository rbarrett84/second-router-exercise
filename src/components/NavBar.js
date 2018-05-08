import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
      <div className="navbar">
        <Link to='/'> HOME </Link>
        <Link to='/greeting'>GREETING</Link>
        <Link to='/goodbye'>GOODBYE</Link>
        <Link to='/custom'>CUSTOM GREETING</Link>
      </div>
      <div className="content">
        <h1 className="page-title">Ways to say Hello and Goodbye</h1>
        {props.children}
      </div>
    </div>
    )
  }
}

export default NavBar;
