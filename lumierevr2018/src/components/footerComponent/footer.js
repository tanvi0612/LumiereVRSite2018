import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      	<div className= "container">
  			<div className="pull-left">
  				<ul>
	  				<li><a href="/">Join Us</a></li>
	  				<li><a href="/">Contact Us</a></li>
	  				<li><a href="/">Terms and Conditions</a></li>
	  				<li><a href="/">Privacy Policy</a></li>
  				</ul>
  				<ul>
	  				<li><a href="/">Press Kit</a></li>
	  				<li><a href="/">Blog</a></li>
  				</ul>
  			</div>

  			<div className="pull-right">
  				<p>Follow Us!</p><br></br>
  				<img src={require('../../images/footer/twitter.png')}/>
  				<img src={require('../../images/footer/fb.png')}/>
  				<img src={require('../../images/footer/yt.png')}/>
  			</div>
  		</div>
      </footer>
    );
  }
}

export default Footer;
