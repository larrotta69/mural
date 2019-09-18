import React from 'react';
import 'styled-components/macro';

import styles from './styles';
import headerImg from '../../img/header.png';

const Header = (props) => {
    const { clickHandler, collapsed } = props;

    return <header css={styles}>
        <img src={headerImg} />
    </header>
}

export default Header;
