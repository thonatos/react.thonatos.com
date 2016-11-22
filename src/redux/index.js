import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as reducer from './modules/reducer'
import { logger } from './middleware'

console.log(routerReducer)

export const store = createStore(
    combineReducers({
        reducer,
        routing: routerReducer
    }),
    applyMiddleware(thunkMiddleware, logger)
)