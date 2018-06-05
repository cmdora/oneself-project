import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createSagaMiddleware  from 'redux-saga' // 1 引入
import rootReducer from './reducer'
import textSaga from './sagas/textSaga'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware() // 2 调用

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      sagaMiddleware, //3 加入到中间件
      loggerMiddleware
    )
  )

  sagaMiddleware.run(textSaga)  // 4  run saga
  // 在 stort 之前调用
  return store
}