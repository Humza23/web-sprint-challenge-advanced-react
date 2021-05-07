import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const first = screen.getByLabelText(/First Name:/i)
    userEvent.type(first, 'first')

    const last = screen.getByLabelText(/Last Name:/i)
    userEvent.type(last, 'last')


    const address = screen.getByLabelText(/Address:/i)
    userEvent.type(address, 'address')


    const city = screen.getByLabelText(/City:/i)
    userEvent.type(city, 'city')


    const state = screen.getByLabelText(/State:/i)
    userEvent.type(state, 'state')


    const zip = screen.getByLabelText(/Zip:/i)
    userEvent.type(zip, 'zip')


    const button = screen.getByRole('button')
    userEvent.click(button)

    const success = screen.getByTestId('successMessage')
    expect(success).toBeInTheDocument()

});
