import React from 'react';
import { Layout, Menu, Icon  } from 'antd';
import 'styled-components/macro';

import styles from './styles';
import Logo from '../Logo';

const ASider = Layout.Sider;

const Sider = (props) => {
    const { collapsed } = props;

    return <ASider css={styles} trigger={null} collapsible collapsed={collapsed}>
        <Logo />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
            </Menu.Item>
        </Menu>
    </ASider>
}

export default Sider;
