import axios from 'axios';
// import { fromJS } from 'immutable';
import * as constants from './constants';
const changHomeDate = (result) => {
    return {
        type: constants.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
    }
}

const addHomeList = (result, articlePage) => {
    return {
        type: constants.ADD_LIST,
        list: result,
        nextPage: articlePage
    }
}
export const getMoreList = (articlePage) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?articlePage=' + articlePage).then((res) => {
            const result = res.data.data;
            // console.log(result)
            dispatch(addHomeList(result, articlePage + 1));
        })
    }

}
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changHomeDate(result));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_SHOW,
    show
})