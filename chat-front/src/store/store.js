import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';  // Use rootReducer from index.js

const store = configureStore({
    reducer: rootReducer,  // Combine the reducers
});

export default store;