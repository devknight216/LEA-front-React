import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './propertyreducer/slice';
import authReducer from './authreducer/slice';

const store = configureStore({
    reducer: {
        properties: propertyReducer,
        auth: authReducer
    }
})

export default store;