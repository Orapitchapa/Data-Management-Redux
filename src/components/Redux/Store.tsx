import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';

const store = configureStore({
    reducer: dataReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;