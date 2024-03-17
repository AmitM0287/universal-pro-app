import React, { useState } from 'react';
import './Counter.component.css';


const Counter: React.FC = () => {
	const [count, setCount] = useState(0);
	const handleIncrement = () => {
		setCount(count + 1);
	};
	const handleDecrement = () => {
		setCount(count - 1);
	};

	return (
		<div className='counter'>
			<h2>Welcome, to counter app</h2>
			<h4>{count}</h4>
			<button type="button" onClick={handleIncrement}>Increment</button>
			<button type="button" onClick={handleDecrement}>Decrement</button>
		</div>
	);
};

export default Counter;
