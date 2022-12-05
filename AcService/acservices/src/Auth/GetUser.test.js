import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "./GetUser";
import axios from "axios";

//const BASE_URL = "https://localhost:7196/Api/User";
const BASE_URL = "https://localhost:7256/api/Welcome";

jest.mock("axios");

describe("Add User Component", () => {
  const mockEditUser = jest.fn();

  it("Should have all columns in the header", () => {
    render(<UserList editUser={mockEditUser} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("UserName")).toBeInTheDocument();
    expect(screen.getByText("Mobilenumber")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("ConfirmPassword")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
  it("should return users list while loading", async () => {
    const users = [
      {
        id: 1,
        regEmail: "testEmail",
        regUsername: "testlname",
        regMobilenumber: "testnumber",
        regPassword: "testpassword",
        regConfirmPassword: "testConfirmPassword",
        
      },
      {
        id: 2,
        regEmail: "testEmail",
        regUsername: "testlname",
        regMobilenumber: "testnumber",
        regPassword: "testpassword",
        regConfirmPassword: "testConfirmPassword",
        
      },
      {
        id: 3,
        regEmail: "testEmail",
        regUsername: "testlname",
        regMobilenumber: "testnumber",
        regPassword: "testpassword",
        regConfirmPassword: "testConfirmPassword",
        
      },
    ];
    // Mocking the Axios.get to return the Users value
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(users);

    // when
    render(<UserList editUser={mockEditUser} />);

    // then - verify that the get endpoint has been called
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/GetUserDetails`);
  });
});