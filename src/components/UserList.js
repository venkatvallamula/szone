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
        this.deleteUser = this.deleteUser.bind(this);
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
    deleteUser(id) {
            console.log(id)
            axios.post('http://localhost:3001/users/user_delete/'+id)
            .then(res => {
                console.log(res.data)
                this.getUsers();
            });
        }



    render() {
        const { users } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                          users && users.map((currentUser, i) => {
                              return (
                                  <tr key={i}>
                                      <td>{i+1}</td>
                                      <td>{currentUser.firstName}</td>
                                      <td>{currentUser.lastName}</td>
                                      <td>{currentUser.username}</td>
                                      <td><Link to={"/user_edit/"+currentUser._id}>Edit</Link></td>
                                      <td><Link onClick={this.deleteUser.bind(this,currentUser._id)}>Delete</Link></td>
                                  </tr>
                              )
                          })
                      }
                  </tbody>
                </Table>
            </div>
        );
    }
}