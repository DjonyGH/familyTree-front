import { applyMiddleware, combineReducers, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducers from './reducers'

const rootReducer = combineReducers(reducers)

// export const store = createStore(rootReducer, applyMiddleware(thunk))

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
