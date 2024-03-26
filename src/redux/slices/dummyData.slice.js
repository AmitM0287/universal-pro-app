import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchData = createAsyncThunk('dummyData/fetchData', async (pageNo) => {
	const response = await axios.get(`https://dummyjson.com/products/${pageNo}`);
	return response.data;
});

const dummyDataSlice = createSlice({
	name: 'dummyData',
	initialState: {
		data: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchData.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export const dummyDataReducer = dummyDataSlice.reducer;

export const dummyData = createSelector((state) => state.dummyData.data, (dummyData) => ({ dummyData }));
