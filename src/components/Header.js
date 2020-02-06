import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
export default class Header extends React.Component{
render() {
    return (
    <div className="header">

      <a href="#default" className="logo">CompanyLogo</a>
      <div className="header-right">
        <Link to="/" className="active">Home</Link>
        <Link to="/register" className="btn btn-link">Register</Link>
        <Link to="/userList" className="btn btn-link">Users</Link>

      </div>
    </div>);
  }
}