
import * as actionTypes from './constants.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 0,
    totalPage: 1,
});

export default (state = defaultState, action) => {

    // immutable对象的set方法会结合之前immutable对象的值
    // console.log(state, action)
    // 和设置的值，返回一个全新的对象
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set("focused", true);
        case actionTypes.SEARCH_BLUR:
            return state.set("focused", false);
        case actionTypes.CHANGELIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set("mouseIn", true);
        case actionTypes.MOUSE_LEAVE:
            return state.set("mouseIn", false);
        case actionTypes.CHANGEPAGE:
            return state.set("page", action.page);
        default:
            return state;
    }
}  