import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)



const store = configureStore({
    reducer: persistedReducer
});

const persistor = persistStore(store);

export {store, persistor};