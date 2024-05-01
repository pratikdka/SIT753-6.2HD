import {render, screen, fireEvent} from '@testing-library/react';
import App from '../App';
import {React} from 'react';

/* global describe, test, expect */
/* eslint no-undef: "error" */

describe('App component', () => {
	test('increments counter', () => {
		render(<App />);
		const incrementButton = screen.getByText('+');
		fireEvent.click(incrementButton);
		const input = screen.getByDisplayValue('1');
		expect(input).toHaveValue('2');
	});

	test('decrements counter', () => {
		render(<App />);
		const incrementButton = screen.getByText('+');
		fireEvent.click(incrementButton);
		const decrementButton = screen.getByText('-');
		fireEvent.click(decrementButton);
		const input = screen.getByDisplayValue('0');
		expect(input).toHaveValue('0');
	});

	test('clears counter', () => {
		render(<App />);
		const incrementButton = screen.getByText('+');
		fireEvent.click(incrementButton);
		fireEvent.click(incrementButton);
		const clearButton = screen.getByText('Clear');
		fireEvent.click(clearButton);
		const input = screen.getByDisplayValue('0');
		expect(input).toHaveValue('0');
	});
});
