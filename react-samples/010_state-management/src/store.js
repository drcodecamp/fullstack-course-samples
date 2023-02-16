import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import rootReducer from './store/rootReducer'
import loggerMiddleware from './middlewares/logger.middleware'
import apiMiddleware from './middlewares/api.middleware'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat([loggerMiddleware, apiMiddleware])
    },
})

export default store
