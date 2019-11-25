import React from "react";
import { CustomerForm } from "../src/CustomerForm";
import { createContainer } from "./domManipulaters";
import ReactTestUtils from "react-dom/test-utils";

const expectToBeInputFieldOfTypeText = formElement => {
  expect(formElement).not.toBeUndefined();
  expect(formElement.tagName).toEqual("INPUT");
  expect(formElement.type).toEqual("text");
}

describe("CustomerForm", () => {
  let container, render;
  const form = id => container.querySelector(`form[id="${id}"]`);
  const firstNameField = () => form("customer").elements.firstName;
  const labelFor = id => container.querySelector(`label[for="${id}"]`);

  beforeEach(() => {
    ({container, render} = createContainer());
  });

  it("renders a form", () => {
    render(<CustomerForm />);
    expect(form('customer')).not.toBeNull()
  });

  it("renders the first name field as a text box", () => {
    render(<CustomerForm />);
    expectToBeInputFieldOfTypeText(firstNameField());
  });

  it("includes the existing value for the first name", () => {
    render(<CustomerForm firstName="Ashley" />);
    expect(firstNameField().value).toEqual("Ashley");
  });

  it("renders a label for the first name field", () => {
    render(<CustomerForm />);

    expect(labelFor('firstName')).not.toBeNull();
    expect(labelFor('firstName').textContent).toEqual("First Name");
  });

  it("saves existing first name when submitted", async () => {
    expect.hasAssertions();
    
    render(
      <CustomerForm
        firstName="Ashley"
        onSubmit={({firstName}) => {
          expect(firstName).toEqual("Ashley")
        }}
      />
    );
    await ReactTestUtils.Simulate.submit(
      form("customer")
    )
  });

  it("saves new first name when submitted", async () => {
    expect.hasAssertions();
    
    render(
      <CustomerForm
        firstName="Ashley"
        onSubmit={({firstName}) => {
          expect(firstName).toEqual("Johan")
        }}
      />
    );

    ReactTestUtils.Simulate.change(
      firstNameField(),
      { target: { value: "Johan" } }
    )

    await ReactTestUtils.Simulate.submit(
      form("customer")
    )
  })
})