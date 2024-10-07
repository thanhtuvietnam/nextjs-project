import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
});

export default authSlice.reducer;
