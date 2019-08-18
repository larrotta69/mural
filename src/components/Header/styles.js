import { css } from 'styled-components';
import { colors } from '../../theme';

const header = css`
    background: ${colors.purple};
    color: white;
    padding-top: 7px;

    svg {
        width: 30px;
        height: 30px;
    }
`

export default header;
