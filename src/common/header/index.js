/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style.js'
import CSSTransition from 'react-transition-group/CSSTransition';
import { actionCreator } from './store/index.js';
import { actionCreators as loginActionCreators } from '../../pages/login/store/index';

class Header extends Component {
    render() {
        const { focused, list, login, logOut, handleIputFocus, handleIputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载</NavItem>
                    {login ?
                        <NavItem className="right" onClick={logOut}>退出</NavItem> :
                        <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }

                    <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={2000} classNames="slide">

                            <NavSearch className={focused ? "focused" : ""}
                                onFocus={() => { handleIputFocus(list) }}
                                onBlur={handleIputBlur}
                            />
                        </CSSTransition>
                        <span className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe66b;</span>
                        {this.getListArea()}


                    </SearchWrapper>
                </Nav>
                <Addtion >
                    <Link to="/write">
                        <Button className="writting"><span className="iconfont">&#xe617;</span>写文章</Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addtion >
            </HeaderWrapper >
        )
    }
    getListArea() {
        const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let index = page * 10; index < (page + 1) * 10; index++) {
                pageList.push(
                    <SearchInfoItem key={index}>{newList[index]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe865;</span>换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}

                    </SearchInfoList>

                </SearchInfo>)
        }
        return null
    }

}




const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(["login", "login"])
    }
}
const mapDispatchToProps = (dispatch) => {
    // console.log(dispatch);
    return {
        handleIputFocus(list) {
            // console.log(list.size)
            if (list.size === 0) {
                dispatch(actionCreator.getList())
            }
            dispatch(actionCreator.searchFocus());

        },
        handleIputBlur() {
            dispatch(actionCreator.searchBlur());
        },
        handleMouseEnter() {
            // console.log(1)
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave() {
            // console.log(2)

            dispatch(actionCreator.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, "")
            // console.log(originAngle)
            if (originAngle) {
                originAngle = parseInt(originAngle);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            if (page < totalPage) {
                dispatch(actionCreator.changePage(page + 1));

            } else {
                dispatch(actionCreator.changePage(0));

            }
        },
        logOut() {
            dispatch(loginActionCreators.logout())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);