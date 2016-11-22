import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'


import reducer from './modules/reducer'
import { logger } from './middleware'

export const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware,logger)
)