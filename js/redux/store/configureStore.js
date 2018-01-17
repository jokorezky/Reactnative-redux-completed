import {createStore, applyMiddleware} from 'redux'
import app from '../reducer'
import thunk from 'redux-thunk'

export default function configureStore() {
  let store = createStore(app, applyMiddleware(thunk))
  return store
}
