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
      </div>

      <div>
        <Link to='/greeting'>GREETING</Link>
      </div>

      <div>
        <Link to='/goodbye'>GOODBYE</Link>
      </div>

        <Link to='/custom'>CUSTOM GREETING</Link>

      <div>
        <h1 className="page-title">Ways to say Hello and Goodbye</h1>
        { this.props.children }
      </div>


    </div>
    )
  }
}

export default NavBar;
