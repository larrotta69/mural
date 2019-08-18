import React from 'react';
import { Icon, Layout } from 'antd';
import 'styled-components/macro';
import styles from './styles';

const AHeader = Layout.Header;

const Header = (props) => {
    const { clickHandler, collapsed } = props;
    return <AHeader css={styles}>
        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={clickHandler} />
    </AHeader>
}

export default Header;
