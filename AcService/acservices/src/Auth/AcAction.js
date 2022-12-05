import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import UserList from "./GetUser";
import axios from "axios";
import "./AcAction.css";
import Register from "./Register";
import { Link } from "react-router-dom";


const apiUrl = "https://localhost:7256/api/Welcome";


class AcAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegister: false,
      error: null,
      response: {},
      userData: {},
      isEdituser: false,
      isServicess: true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isRegister: true });
    this.setState({ isServicess: false });
  }
  onDetails() {
    this.setState({ isServicess: true });
    this.setState({ isRegister: false });
  }

  onFormSubmit(data) {
    this.setState({ isRegister: true });
    this.setState({ isServicess: false });
    if (this.state.isEdituser) {
      axios.put(apiUrl + "/UpdateEmployeeDetails", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isRegister: false,
          isEdituser: false,
        });
      });
    } else {
      axios.post(apiUrl + "/InsertServicess", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isRegister: false,
          isEdituser: false,
        });
      });
    }
  }

  editUser = (Id) => {
    this.setState({ isServicess: false });
    axios.get(apiUrl + "/GetUserDetailsById/" + Id).then(
      (result) => {
        this.setState({
          isEdituser: true,
          isRegister: true,
          userData: result.data,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  render() {
    let userForm;
    if (this.state.isRegister || this.state.isEdituser) {
      userForm = (
        <Register
          data-testid="adduser"
          onFormSubmit={this.onFormSubmit}
          user={this.state.userData}
        />
      );
    }
    return (
      <div className="App">
       
        <button className="logout"><Link to="/" className="logbtn" >Logout</Link></button>

        <Container >
          <h1  >Welcome to Ac Services</h1>
          <hr id="line"></hr>
          {!this.state.isServicess && (
            <Button className="btn3" variant="primary" onClick={() => this.onDetails()}>
              {" "}
              User Details
            </Button>
          )}
          {!this.state.isRegister && (
            <Button className="btn1" variant="primary" onClick={() => this.onCreate()}>
              Register
            </Button>
          )}
          <br></br>
          {!this.state.isRegister && (
            <UserList data-testid="userlist" editUser={this.editUser} />
          )}
          {userForm}
        </Container>
      </div>
    );
  }
}
export default AcAction;