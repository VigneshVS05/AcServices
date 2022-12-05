import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";


const apiUrl = "https://localhost:7256/api/Welcome";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + "/GetAllServicee")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(id) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteUserDetails/" + id).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== id),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <Table>
            <thead className="btn-primary">
              <tr>
                <th>Email</th>
                <th>MobileNumber</th>
                <th>Password</th>
                <th>AcUserName</th>
                <th>AcBrands</th>
                <th>AcPrice</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-testid="userrow">
                  <td>{user.email}</td>
                  <td>{user.mobilenumber}</td>
                  <td>{user.password}</td>
                  <td>{user.acUsername}</td>
                  <td>{user.acBrands}</td>
                  <td>{user.acPrice}</td>
                  
                  <td>
                    <Button 
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                    Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default UserList;