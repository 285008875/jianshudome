/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from "./style";
import { actionCreators } from "./store/index";

class Detail extends Component {
    render() {
        // console.log(this.props.match.params);
        const { title, content } = this.props;
        return (
            <div>
                <DetailWrapper>
                    <Header>{title}</Header>
                    <Content dangerouslySetInnerHTML={{ __html: content }}>

                    </Content>
                </DetailWrapper>
            </div>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }

}
const mapdState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),

})
const mapdispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapdState, mapdispatch)(Detail);