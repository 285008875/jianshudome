
import { fromJS } from 'immutable';
import { constants } from './index.js'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,

});

export default (state = defaultState, action) => {
    // console.log(action)
    // immutable对象的set方法会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),

            });
        case constants.ADD_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.list)),
                articlePage: action.nextPage
            });
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
}  