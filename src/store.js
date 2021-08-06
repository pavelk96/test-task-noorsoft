import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootWatcher from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: reducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootWatcher)
export default store;
