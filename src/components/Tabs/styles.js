import { css } from 'styled-components';
import { colors } from '../../theme';

const tabs = css`
    background: ${colors.purple_3};

    i {
        display: block;
        text-align: center;
        margin: 0 auto 10px !important;

        svg {
            width: 30px;
            height: 30px;
        }
    }

    .ant-tabs-top-bar {
        margin: 0;
        border: 0;
        color: white;
    }

    .ant-tabs-tab {
        padding: 20px;
    }

    .ant-tabs-tabpane {
        min-height: calc( 100vh - 64px );
        padding: 20px;
        background: ${colors.purple_4};
        color: white;

        h2 {
            color: white;
        }
    }
`

export default tabs;
