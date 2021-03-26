import { createSlice } from '@reduxjs/toolkit';

export const filmSlice = createSlice({
  name: 'film',
  initialState: {
    value: [
        'Tarzan',
        '5 élements',
        'Cortex les pyramides',
        'Il faut sauver Paul',
        'Papi j\'ai raté le taxi',
        'Albatard',
        'Capitaine Russia',
        'Cinéma pas paradiso'
],
  },
  reducers: {
    addFilm: (state, action) => {
        console.log("Bravo tu es dans le reducer")
      state.value =[...state.value, action.payload];
    },
  },
});

export const { addFilm } = filmSlice.actions;

export default filmSlice.reducer;