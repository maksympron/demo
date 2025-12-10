import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  persistReducer,
  persistStore,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import theme from './slices/theme/slice';
import translates from './slices/translates/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['theme', 'translates'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    theme,
    translates,
  }),
);

// biome-ignore lint/suspicious/noExplicitAny: <no reason>
export function makeStore(preloadedState?: any) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
}

export const store = makeStore();

setupListeners(store.dispatch);

export const persistor = persistStore(store);
