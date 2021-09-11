import React from "react";
import logo from './../../logo.svg'
import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig';
import './index.less'
const { SubMenu } = Menu;
class navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey: ''
        }
    }
    componentDidMount() {
        const menuThreeNode = this.renderMenu(MenuConfig);
        const currentKeys = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
            menuThreeNode,
            currentKey: currentKeys
        })
    };
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            // 重复点击同一个路由组件， 数据不刷新， 会有警告 replace这个很好的解决了这个问题
            return <Menu.Item className="menuitem" key={item.key} title={item.title} >{item.title}</Menu.Item>
        })
    };
    handleClick =({item}) => {
        console.log(item)
        console.log(item.props.eventKey)
        this.setState({
            currentKey: item.props.eventKey
        })
    };
    render() {
        return (
          <div className="menus">
                <div className="logo">
                    <img className="App_logo" src={logo}  alt="logo" />
                    <p>客服系统</p>
                </div>
                <Menu  onClick={this.handleClick} className="menubox" mode="inline" theme="dark" >
                    {this.state.menuThreeNode}
                </Menu>
          </div>
        )
    }
}
export default navigation