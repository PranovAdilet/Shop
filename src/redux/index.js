import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import popup from "./popup";
import cards from "./cards"
import product from "./product"
import basket from "./basket"
import search from "./search"
import favorite from "./favorite"
import user from "./user"
import order from "./order"
import userOrder from "./userOrder"

const persistConfig ={
    key:'root',
    storage
}

const rootReducer = combineReducers({
    popup,
    cards,
    product,
    basket,
    search,
    favorite,
    user,
    order,
    userOrder
})

const reducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer:{
        reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})


export const persistor = persistStore(store)
export default store