import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    activeMainItem: null,
    activeSubItem: null,
  },
  reducers: {
    setActiveMainItem: (state, action) => {
      state.activeMainItem = action.payload;
    },
    setActiveSubItem: (state, action) => {
      state.activeSubItem = action.payload;
    },
  },
});

export const { setActiveSubItem, setActiveMainItem } = navbarSlice.actions;

export default navbarSlice.reducer;
