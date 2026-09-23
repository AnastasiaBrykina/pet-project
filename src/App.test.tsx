import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
	it('Счетчик увеличивается на 1 при клике', async () => {
		const user = userEvent.setup();
		render(<App />);

		const counterButton = screen.getByTestId('counter-button');

		expect(counterButton).toHaveTextContent('Count is 0');

		await user.click(counterButton);

		expect(counterButton).toHaveTextContent('Count is 1');
	});
});
