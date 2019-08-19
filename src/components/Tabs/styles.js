import { css } from 'styled-components';
import { colors } from '../../theme';

const headerHeight = '64px';
const tabsHeight = '100px';

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

    .ant-tabs-content {
        background: ${colors.purple_4};
        min-height: calc( 100vh - ${headerHeight} - ${tabsHeight} );
        padding: 20px;
    }
`

export default tabs;
