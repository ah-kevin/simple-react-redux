/**
 * Created by dg_lennon on 16/5/31.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  routing:routerReducer
});

export default rootReducer
