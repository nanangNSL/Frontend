import {  legacy_createStore as createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger'


import rootReducer from './reducers.js'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 

export const store = createStore(persistedReducer, applyMiddleware(logger))
export const persistor = persistStore(store, {});