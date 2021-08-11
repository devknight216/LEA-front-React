import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './reducer/propertyreducer';

const store = configureStore({
    reducer: {
        properties: propertyReducer
    }
})

export default store;