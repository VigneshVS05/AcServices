import React from "react";
import { render } from "@testing-library/react";
import Register from "./Register";

describe("Add User Component", () => {
  const mockFormSubmit = jest.fn();
  const stubbedUserData = {
    id: "",
    regEmail: "",
      regUsername: "",
      regMobilenumber: "",
      regPassword: "",
      regConfirmPassword: ""
  };

  it("Show all input fields with empty value", () => {
    const { getByTestId } = render(
      <Register onFormSubmit={mockFormSubmit} user={stubbedUserData} />
    );

    expect(getByTestId("regEmail").value).toBe("");
    expect(getByTestId("regUsername").value).toBe("");
    expect(getByTestId("regMobilenumber").value).toBe("");
    expect(getByTestId("regPassword").value).toBe("");
    expect(getByTestId("regConfirmPassword").value).toBe("");
    
  });
});