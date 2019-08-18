import React from 'react';
import { Layout, Menu, Icon, Typography } from 'antd';

import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function App() {
    return (
        <div className="App">
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span className="nav-text">item 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span className="nav-text">item 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span className="nav-text">item 3</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="bar-chart" />
                                <span className="nav-text">item 4</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="cloud-o" />
                                <span className="nav-text">item 5</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="appstore-o" />
                                <span className="nav-text">item 6</span>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="team" />
                                <span className="nav-text">item 7</span>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Icon type="shop" />
                                <span className="nav-text">item 8</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                                <Title>Mural</Title>
                                content
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Mural ©2019</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }

    export default App;
