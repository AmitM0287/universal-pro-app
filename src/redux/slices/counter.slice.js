import { createSlice, createSelector } from '@reduxjs/toolkit';


const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0
	},
	reducers: {
		incremented: (state) => {
			state.count += 1;
		},
		decremented: (state) => {
			state.count -= 1;
		}
	}
});

export const { incremented, decremented } = counterSlice.actions;
export const CounterReducer = counterSlice.reducer;

export const getCount = createSelector(
	(state) => state.counter.count,
	(count) => ({ count })
);
