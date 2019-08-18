import { css } from 'styled-components';

import { withAnimation } from '../../theme';

const logo = css`
    ${withAnimation('width')}
    width: 80px;
    margin: 20px auto;
    text-align: center;
    font-style: oblique;

    .ant-layout-sider-collapsed & {
        width: 40px;
    }

    span {
        color: white;
    }
`

export default logo;
