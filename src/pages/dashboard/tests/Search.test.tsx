import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {Search} from '../component';
import userEvent from '@testing-library/user-event';


let props = {
  searchInput: "",
  handleSearchInput:jest.fn()
}
type TestElement = Document | Element | Window | Node

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e
}

test('it does not render Search', () => {
  render(<Search {...props}/>);
  const searchElement = screen.getByPlaceholderText(/Search user/i);
  expect(searchElement).toBeInTheDocument();
});

test('it renders Search that displays correct keyboard input', async () => {
  render(<Search {...props}  searchInput="testLogin"/>);
  const searchElement = screen.getByPlaceholderText(/Search user/i);
fireEvent.change(searchElement, { target: { value: 'testLogin' } })
expect(hasInputValue(searchElement, "testLogin")).toBe(true)
});
