import { combineReducers } from 'redux-immutable';
import { reducer as headerRedux } from '../common/header/store/index.js';
import { reducer as homeRedux } from '../pages/home/store/index.js';
import { reducer as DetailRedux } from '../pages/detail/store/index';
import { reducer as LoginRedux } from '../pages/login/store/index';
const reducer = combineReducers({
    header: headerRedux,
    home: homeRedux,
    detail: DetailRedux,
    login: LoginRedux
})

export default reducer; 