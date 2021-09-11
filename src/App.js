import React from 'react';
import { Layout } from 'antd';
import './App.less';
import Navigation from './components/navigation'
const { Header, Footer, Sider, Content } = Layout;
class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Sider className="sider">
          <Navigation />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
    </Layout>
    )
  }
}

export default App;
