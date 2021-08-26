import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './propertyreducer/slice';
import authReducer from './authreducer/slice';
import userReducer from './userreducer/slice';

const store = configureStore({
    reducer: {
        properties: propertyReducer,
        auth: authReducer,
        user: userReducer
    }
})

export default store;