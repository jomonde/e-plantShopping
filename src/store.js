import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addItem, removeItem, u } from './CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
