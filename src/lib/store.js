import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/auth.slice.js';
import themeReducer from './features/theme/theme.slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});
