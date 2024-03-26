import './Dummy.component.css';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/slices/dummyData.slice';


const Dummpy = () => {
	const dispatch = useDispatch();

	dispatch(fetchData(12)).then((response) => {
		console.log('Data fetching successful!', response); // Promise fulfilled
	}).catch((error) => {
		console.error('Error fetching data:', error); // Promise rejected
	});

	return (
		<div>
			<h1> Dummy Data </h1>
		</div>
	);
};

export default Dummpy;
