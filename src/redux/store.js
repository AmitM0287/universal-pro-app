import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from './slices/counter.slice';
import { dummyDataReducer } from './slices/dummyData.slice';


const store = configureStore({
	reducer: {
		counter: CounterReducer,
		dummyData: dummyDataReducer
	}
});

export default store;
