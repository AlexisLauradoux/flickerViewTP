import { createSlice } from '@reduxjs/toolkit';

export const filmSlice = createSlice({
  name: 'film',
  initialState: {
    value: [
        'Tarzan',
        '5 élements',
        'Cortex les pyramides'
],
  },
  reducers: {
    addFilm: (state, action) => {
      state.value =[...state.value, action.payload];
    },
  },
});

export const {  addFilm } = filmSlice.actions;

export default filmSlice.reducer;