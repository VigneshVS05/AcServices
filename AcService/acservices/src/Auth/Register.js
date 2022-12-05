import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      regEmail: "",
      regMobilenumber: "",
      regPassword: "",
      regAcUsername:"",
      regAcBrands:"",
      regAcPrice: "",
      
    };

    if (props.user.Id) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.Id) {
      pageTitle = <h2>Edit User</h2>;
      actionStatus = <b>Update</b>;
    } else {
      pageTitle = <h2 className="Add">Add User</h2>;
      <br></br>
      actionStatus = <b className="btn2">Save</b>;
    }

    return (
      <div className="total">
        <h2> {pageTitle}</h2>

        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="regEmail">
                <Form.Label className="name">Email :</Form.Label>
                <Form.Control
                className="email1"
                  type="text"
                  name="regEmail"
                  data-testid="regEmail"
                  value={this.state.regEmail}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group controlId="regMobilenumber">
                <Form.Label className="name">MobileNumber:</Form.Label>
                <Form.Control
                className="mob1"
                  type="text"
                  name="regMobilenumber"
                  data-testid="regMobilenumber"
                  value={this.state.regMobilenumber}
                  onChange={this.handleChange}
                  placeholder="Mobilenumber"
                />
              <Form.Group controlId="regPassword">
                <Form.Label className="name">Password :</Form.Label>
                <Form.Control
                 className="reg1"
                  type="password"                 
                  name="regPassword"
                  data-testid="regPassword"
                  value={this.state.regPassword}
                  onChange={this.handleChange}
                  placeholder="Password"
                />

            </Form.Group>
              <Form.Group controlId="regAcUsername">
                <Form.Label className="name">AcUsername :</Form.Label>
                <Form.Control
                className="use1"
                  type="text"
                  name="regAcUsername"
                  data-testid="regAcUsername"
                  value={this.state.regAcUsername}
                  onChange={this.handleChange}
                  placeholder="Username"
                />
              </Form.Group>

              </Form.Group>
              <Form.Group controlId="regAcBrands">
                <Form.Label className="name">AcBrands :</Form.Label>
                <Form.Control
                className="brand1"
                  type="text"
                  name="regAcBrands"
                  data-testid="regAcBrands"
                  value={this.state.regAcBrands}
                  onChange={this.handleChange}
                  placeholder="Brand"
                />
              </Form.Group>

              <Form.Group controlId="regAcPrice">
                <Form.Label className="name">AcPrice :</Form.Label>
                <Form.Control
                className="price1"
                  type="text"
                  name="regAcPrice"
                  data-testid="regAcPrice"
                  value={this.state.regAcPrice}
                  onChange={this.handleChange}
                  placeholder="Price"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="Id"
                  value={this.state.Id}
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Register;