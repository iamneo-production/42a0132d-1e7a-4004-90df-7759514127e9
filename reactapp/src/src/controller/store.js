import root from "./main"
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage as the storage

const persistConfig = {
  key: 'root', // The key to use for the root of the state object in storage
  storage, // Use localStorage as the storage medium
};

const persistedReducer = persistReducer(persistConfig, root);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
