import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from "./Title";

test('renders learn react link', () => {
  render(<Title />);
  const linkElement = screen.getByText(/Start/i);
  expect(linkElement).toBeInTheDocument();
});
