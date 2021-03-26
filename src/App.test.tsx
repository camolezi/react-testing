import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import wikiServer from '../mocks/wiki';

beforeAll(() => wikiServer.listen());

afterEach(() => wikiServer.resetHandlers());

afterAll(() => wikiServer.close());

test('text should be green if searched article wordcount is smaller than 5000', async () => {
  render(<App />);

  const input = screen.getByLabelText('Type something', { exact: false });
  userEvent.type(input, 'house');

  userEvent.click(screen.getByRole('button'));

  const text = await screen.findByRole('heading');
  expect(text).toHaveStyle({ backgroundColor: 'green' });
});

test('text should be red if searched article wordcount is greater than 5000', async () => {
  render(<App />);

  const input = screen.getByLabelText('Type something', { exact: false });
  userEvent.type(input, 'color');

  userEvent.click(screen.getByRole('button'));

  const text = await screen.findByRole('heading');
  expect(text).toHaveStyle({ backgroundColor: 'red' });
});
