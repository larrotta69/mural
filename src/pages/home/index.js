import React from 'react';
import 'styled-components/macro';
import { Layout } from 'antd';
import './styles.css';

import content from './data';
import Header from '../../components/Header';
import Sider from '../../components/Sider';
import Tabs from '../../components/Tabs';

// const { Content } = Layout;

class App extends React.Component {
    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        return (
            <Layout className="home">
                <Sider collapsed={this.state.collapsed} />
                <Layout>
                    <Header collapsed={this.state.collapsed} clickHandler={this.toggle} />
                    <Tabs tabs={content.tabs} />
                    {/* <Content>
                        Content
                    </Content> */}
                </Layout>
            </Layout>
        );
    }
}

export default App;
