import React from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Nav from './components/Nav.js'
import "bootstrap/dist/css/bootstrap.css";
import { Col } from 'react-bootstrap';
function App() {
  return (

    <div className="App">

       <Nav/>
      <Col >
          <Header/>
          <div className="w3-main" style={{marginLeft: '280px'}}>
          <header id="portfolio">
            <a href="#"><img src={logo} style={{width: '65px'}} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></a>
            <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" ><i className="fa fa-bars" /></span>
            <div className="w3-container">
              <h1><b>My Portfolio</b></h1>
              <div className="w3-section w3-bottombar w3-padding-16">
              <span className="w3-margin-right">Filter:</span>
              <button className="w3-button w3-black">ALL</button>
              <button className="w3-button w3-white"><i className="fa fa-diamond
                  w3-margin-right" />Design</button>
              <button className="w3-button w3-white w3-hide-small"><i className="fa
                  fa-photo w3-margin-right" />Photos</button>
              <button className="w3-button w3-white w3-hide-small"><i className="fa
                  fa-map-pin w3-margin-right" />Art</button>
              </div>
            </div>
          </header>
        </div>
        <br />
        <Footer/>
      </Col>
    </div>
  );
}

export default App;
