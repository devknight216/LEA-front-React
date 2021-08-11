import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './propertyreducer/slice';

const store = configureStore({
    reducer: {
        properties: propertyReducer
    }
})

export default store;