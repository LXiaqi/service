
import React from 'react'
import './login.less'
import { Input, Button,message} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { userLogin } from './../../api/login'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:'',
            loading:false
        }
    }
    render() {
        return (
            <div className="login">
                <div className="log_content">
                    <div className="log_box">
                        <div className="log_title">欢迎登录</div>
                        <div className="log_title">欢迎法保网客服系统</div>
                        <Input className="log_name" onChange={this.handleChangeUserName} size="large" placeholder="请输入账号" prefix={<UserOutlined />} />
                        <Input.Password className="log_psd" onChange={this.handleChangePassWord} placeholder="请输入密码" size="large" />
                        <Button className="log_btn" type="primary" size="large" onClick={this.singIn} loading={this.state.loading}>登录</Button>
                    </div>
                </div>
            </div>
        )
    }
    singIn = () => {
        if (this.state.username === '' || this.state.password === '') {
            message.warning('登录名和密码不能为空');
        }else {
            this.setState({
                loading:true
            })
            userLogin(this).then(() => {
                this.props.history.push({
                    pathname: '/admin/home'
                  });
                this.setState({
                    loading:false
                })
            })
        }
    }
    handleChangeUserName = (e) => {
        this.setState({
            username: e.target.value,
        })

    }
    handleChangePassWord = (e) => {
        this.setState({
            password: e.target.value
        })
    }
}
export default Login