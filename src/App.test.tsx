import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('button should be blue if input is smaller than 10', () => {
  render(<App />);

  const input = screen.getByLabelText('Type a number');
  userEvent.type(input, '5');

  const button = screen.getByRole('button', { name: 'Color' });
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
});

test('button should be red if input is greater than 10', () => {
  render(<App />);

  const input = screen.getByLabelText('Type a number');
  userEvent.type(input, '11');

  const button = screen.getByRole('button', { name: 'Color' });
  expect(button).toHaveStyle({ backgroundColor: 'red' });
});
