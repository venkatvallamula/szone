import React from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import UserList from './components/UserList.js'
import Register from './components/Register.js'
import EditUser from './components/EditUser.js'
import Login from './components/Login.js'
import "bootstrap/dist/css/bootstrap.css";
import { Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">

       <Nav/>
      <Col >
          <Header/>

        <br />
          <Route path="/" exact component={Home} />
          <Route path="/register"  component={Register} />
          <Route path="/login"  component={Login} />
          <Route path="/userList"  component={UserList} />
          <Route path="/user_edit/:id"  component={EditUser} />
        <Footer/>
      </Col>
    </div>
    </Router>
  );
}

export default App;
