import { useState } from 'react';

export function CounterButton() {
	const [count, setCount] = useState<number>(0);

	return (
		<button
			type="button"
			className="counter"
			data-testid="counter-button"
			onClick={() => setCount((count) => count + 1)}
		>
			Count is {count}
		</button>
	);
}
