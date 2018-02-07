/* eslint func-style: ["error", "expression"]*/
import rootSaga from './sagas'
import logger from 'redux-logger'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'

const sagaMiddleware = createSagaMiddleware()

export default function (initialState = {}) {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware, logger))

  sagaMiddleware.run(rootSaga)
  return store
}
