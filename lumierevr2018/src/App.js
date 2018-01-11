import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Distribute from './components/pages/distribute';
import Footer from './components/footerComponent/footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
    
      <Header/>
      
      <Route exact path = '/' component={Homepage} />
      <Route exact path = '/Distribute' component={Distribute}/>
      
      <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
