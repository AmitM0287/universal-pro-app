import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from './slices/counter.slice';


const store = configureStore({
	reducer: {
		counter: CounterReducer
	}
});

export default store;
