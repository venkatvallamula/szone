import React from 'react';
import { Link } from 'react-router-dom';
import {Table } from 'react-bootstrap';
import axios from 'axios';
export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
        };
        this.getUsers = this.getUsers.bind(this);
    }
    componentDidMount() {
        this.getUsers();
    }
    getUsers() {
        axios.get('http://localhost:3001/users/allUsers')
        .then(res => {
            console.log(res.data)
            if(!res.data){
                alert('no users')
            }else{
                this.setState({users:res.data})
            }
        });
    }
    usersLists() {
        return this.state.users.map(function (currentUser, i) {
            return (
                <tr key = {i}>
                    <td>{i+1}</td>
                    <td>{currentUser.firstName}</td>
                    <td>{currentUser.lastName}</td>
                    <td>{currentUser.username}</td>
                    <td><Link to={"/user_edit/"+currentUser._id}>Edit</Link></td>
                </tr>
            );
        })
    }
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.usersLists()}
                  </tbody>
                </Table>
            </div>
        );
    }
}