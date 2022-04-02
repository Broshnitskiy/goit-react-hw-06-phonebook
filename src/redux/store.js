import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts,
  },
});
