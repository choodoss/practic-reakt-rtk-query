import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      state.filter = payload;
    }
  },
});

export const { addFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectorFilter = (state) => state.filter.filter;
