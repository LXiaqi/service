import http from './../utils/request'
export async function userLogin(that) {
    const res = await http.get('/Login/Login?userName='+ that.state.username + '&pwd=' + that.state.password)
    return res;
}