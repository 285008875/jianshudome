/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style.js';
import { connect } from 'react-redux';
class Topic extends Component {
    render() {

        return (
            <TopicWrapper>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <TopicItem key={index}>
                                <img className="top-pic" src={item.get('imgUrl')} alt='' />
                                {item.get('title')}
                            </TopicItem>

                        )
                    })
                }

            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('topicList'),
})
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, null)(Topic); 