import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item, index) => {
                        return (<RecommendItem key={index} imgUrl={item.get('imgUrl')} />)
                    })
                }


            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'recommendList']),
})


export default connect(mapStateToProps, null)(Recommend);