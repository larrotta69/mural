import { css } from 'styled-components';

import { colors } from '../../theme';

const table = css`
    thead > tr > th {
        text-transform: uppercase;
    }

    tbody > tr:nth-child(odd) {
        background: ${colors.grey_1};
    }
`

export default table;
