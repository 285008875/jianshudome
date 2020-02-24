import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store/index';



class Login extends PureComponent {

    render() {
        const { isLogin } = this.props;
        // console.log(isLogin);

        if (!isLogin) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder=" 账号" type="text" ref={(input) => { this.account = input }} />
                        <Input placeholder=" 密码" type="password" ref={(input) => { this.password = input }} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )

        } else {
            return (<Redirect to='/' />)
        }
    }


}
const mapdState = (state) => ({
    isLogin: state.getIn(['login', 'login']),
})
const mapdispatch = (dispatch) => ({
    login(accountEle, passwordEle) {
        // console.log(accountEle.value, passwordEle.value)
        dispatch(actionCreators.login(accountEle.value, passwordEle.value))
    }
})
export default connect(mapdState, mapdispatch)(Login);