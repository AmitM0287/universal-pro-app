import React from 'react';
import './Counter.component.css';
import { useDispatch, useSelector } from 'react-redux';
import { incremented, decremented, getCount } from '../../redux/slices/counter.slice';


const Counter: React.FC = () => {
	const dispatch = useDispatch();
	const { count } = useSelector(getCount);

	const handleIncrement = () => {
		dispatch(incremented());
	};

	const handleDecrement = () => {
		dispatch(decremented());
	};

	return (
		<div className='counter'>
			<h2> Welcome to the counter app </h2>
			<h4> { count } </h4>
			<button type="button" onClick={ handleIncrement }> Increment </button>
			<button type="button" onClick={ handleDecrement }> Decrement </button>
		</div>
	);
};

export default Counter;
