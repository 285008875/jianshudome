import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import List from './components/List';
import { actionCreators } from './store/index'
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { BackTop } from './style';



class Home extends Component {

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}> 顶部</BackTop> : null}

            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

}
const mapdState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll']),
})
const mapdispatch = (dispatch) => ({
    changHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(e) {
        // console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapdState, mapdispatch)(Home);