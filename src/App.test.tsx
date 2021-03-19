import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('should be blue if input is smaller than 10', () => {
    render(<App/>);

    const input = screen.getByLabelText("Type a number");
    userEvent.type(input,'5');

    const button = screen.getByRole('button',{name:'Color'});
    expect(button).toHaveStyle({backgroundColor:"blue"})
});

test('should be red if input is greater than 10', () => {
    render(<App/>);

    const input = screen.getByLabelText("Type a number");
    userEvent.type(input,'11');

    const button = screen.getByRole('button',{name:'Color'});
    expect(button).toHaveStyle({backgroundColor:"red"})
});

