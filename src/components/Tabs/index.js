import React from 'react';
import { Tabs as ATabs, Icon } from 'antd';
import 'styled-components/macro';
import styles from './styles';

const { TabPane } = ATabs;

const Tabs = (props) => {
    const { tabs } = props
    return <ATabs css={styles} defaultActiveKey="1" animated={false}>
        {tabs.map(tab => <TabPane
            tab={
                <span>
                    <Icon type={tab.icon} />
                    {tab.title}
                </span>
            }
            key={tab.id}>
            {tab.content}
        </TabPane>)}
    </ATabs>
}

export default Tabs;
