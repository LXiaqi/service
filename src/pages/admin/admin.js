import React from 'react';
import { Layout } from 'antd';
import './admin.less';
import Navigation from './../../components/navigation'
const { Header,  Sider, Content } = Layout;
class Admin extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Sider className="sider">
          <Navigation />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>{this.props.children}</Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
    </Layout>
    )
  }
}

export default Admin;