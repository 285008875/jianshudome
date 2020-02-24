
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'



class Write extends PureComponent {

    render() {
        const { isLogin } = this.props;
        if (isLogin) {
            return (<div>写文章</div>)

        } else {
            return (<Redirect to='/login' />)
        }
    }


}
const mapdState = (state) => ({
    isLogin: state.getIn(['login', 'login']),
})
const mapdispatch = (dispatch) => ({

})
export default connect(mapdState, mapdispatch)(Write);


















