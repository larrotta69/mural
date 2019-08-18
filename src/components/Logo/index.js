import React from 'react';
import 'styled-components/macro';
import styles from './styles';

import { ReactComponent as Logo } from '../../icon.svg';

const Sider = () => {
    return <div css={styles}>
        <Logo />
        <span>mural</span>
    </div>
}

export default Sider;
