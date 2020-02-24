import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style.js'
import { actionCreators } from '../store/index';
class List extends Component {
    render() {
        const { list, getMoreList, articlePage } = this.props;
        return (
            <div>
                {list.map((item, index) => {
                    return (
                        <Link key={index} to={'/detail/' + item.get("id")}>
                            <ListItem >
                                <img className="pic" src={item.get('imgUrl')} alt="120"></img>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')} </h3>
                                    <p className="desc">{item.get('desc')} </p>
                                </ListInfo>
                            </ListItem>
                        </Link>

                    )
                })}
                <LoadMore onClick={() => { getMoreList(articlePage) }}>更多</LoadMore>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
})
const mapStateToDispatch = (dispatch) => ({
    getMoreList(articlePage) {
        dispatch(actionCreators.getMoreList(articlePage))
    }
})
export default connect(mapStateToProps, mapStateToDispatch)(List);