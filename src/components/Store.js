import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import discReducer from './DiscReducer'

const loggerMiddleware = createLogger()

const store = createStore(
    combineReducers({
      discState: discReducer
      
    }),
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)

export default store;
