import React from 'react';
import 'styled-components/macro';
import { Card as ACard, Icon } from 'antd';

import styles from './styles';

const { Meta } = ACard;

const Card = ({ title, description, imgSrc }) => {
    return <ACard
        css={styles}
        cover={ <img alt="example" src={imgSrc} /> }
        actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
        ]}
        >
            <Meta title={title} description={description} />
    </ACard>
}

export default Card;
