import React from 'react';
import { Icon, Layout, Avatar, Badge } from 'antd';
import 'styled-components/macro';
import styles from './styles';

const AHeader = Layout.Header;

const Header = (props) => {
    const { clickHandler, collapsed } = props;

    return <AHeader css={styles}>
        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={clickHandler} />
        <Badge count={1}>
            <Avatar shape="square" icon="user" />
        </Badge>
    </AHeader>
}

export default Header;
