import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'
import TokopediaAdsReducer from './modules/TokopediaAdsReducer'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const rootReducer = combineReducers({
  TokopediaAdsReducer
})

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);
export default rootReducer
