import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import process from './process'
import steps from './steps'
import users from './users'

const reducer = combineReducers({
  process,
  steps,
  users,
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
))
const store = createStore(reducer, middleware)

export default store
export * from './process'
export * from './steps'
export * from './users'
