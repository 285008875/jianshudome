import axios from 'axios';
import { fromJS } from 'immutable'

import * as actionTypes from './constants.js';

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})
export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})
const changeList = (data) => ({
    type: actionTypes.CHANGELIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const changePage = (page) => ({
    type: actionTypes.CHANGEPAGE,
    page
})
export const getList = () => {
    return (dispatch) => {
        axios.get('api/headerlist.json').then((res) => {
            dispatch(changeList(res.data.data))
        }).catch(() => {
            console.log('err');
        })
    }
} 