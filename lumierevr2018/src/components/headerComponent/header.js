import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

      <div className='logo'>
      <img src={require('../../images/header/logo.png')}/>
      </div>

      <nav>
      	<ul>
      		<li className='first'>
      			<Link to ="/"> Create </Link>
      		</li>
      		<li>
      			<Link to="/Distribute"> Distribute </Link>
      		</li>
      		<li>
      			<Link to="/">Contacts</Link>
      		</li>
      		<li className='last'>
      			<Link to="/">Join</Link>
      		</li>
      	</ul>
      </nav>
      </header>
    );
  }
}

export default Header;
