import React from "react";
import { render } from "react-dom";
import Appointment from "../src/Appointment";

describe('Appointment', () => {
  it("renders the customer first name", () => {
    const container = document.createElement("div");
    const customer = { firstName: "Ashley" };
    const component = <Appointment customer={customer} />;

    render(component, container);
    expect(container.textContent).toMatch('Ashley')
  });

  it("renders the customer another first name", () => {
    const container = document.createElement("div");
    const customer = { firstName: "Jordan" };
    const component = <Appointment customer={customer} />;

    render(component, container);
    expect(container.textContent).toMatch('Jordan')
  })
});