import { css } from 'styled-components';
import { colors } from '../../theme';

const header = css`
    background: ${colors.purple_2};
    color: white;
    padding-top: 7px;
    padding-left: 10px;

    svg {
        width: 30px;
        height: 30px;
    }

    .ant-badge {
        position: absolute;
        right: 20px;
        top: 20px;
    }
`

export default header;
