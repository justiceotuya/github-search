import React from 'react';
import { render, screen } from '@testing-library/react';
import {Pagination} from '../component';


let props = {
  currentPage: 1,
  handlePageNavigation:jest.fn()
}
test('it does not render pagination when total page is less than 2', () => {
  render(<Pagination {...props}  totalPage={1}/>);
  const nextElement = screen.queryByText(/next/i);
  const previousElement = screen.queryByText(/previous/i);
  expect(nextElement).toBeNull();
  expect(previousElement).toBeNull();
});

test('it renders pagination when total page is greater than 1', () => {
  render(<Pagination {...props} totalPage={2}/>);
  const nextElement = screen.queryByText(/next/i);
  const previousElement = screen.queryByText(/previous/i);
  expect(nextElement).toBeInTheDocument();
  expect(previousElement).toBeInTheDocument();
});
