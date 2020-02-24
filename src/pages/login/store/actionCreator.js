import axios from 'axios';
import { constants } from './index'

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true,
})
export const logout = () => ({
    type: constants.LOGOUT,
    value: false,
})
export const login = (account, password) => {
    return (dispatch) => {
        axios.get("/api/login.json?account=" + account + "&password=" + password)
            .then((res) => {
                // console.log(res);
                const result = res.data.data;
                if (result) {
                    dispatch(changeLogin())
                } else {
                    console.log(false);
                }
            })
    }
}