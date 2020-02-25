import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, getByTestId, fireEvent, getByLabelText, getByPlaceholderText } from "@testing-library/react";
import 'mutationobserver-shim';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



test("Get  By ID Lambda Logo", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/logo/i);
});


test("Get  By ID Git Logo", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/git/i);
});

