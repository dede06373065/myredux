import {createStore} from 'redux'
import allReducers from './redux/reducers/allReducer'
export default createStore(allReducers)