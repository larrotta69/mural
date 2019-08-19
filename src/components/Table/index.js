import React from 'react';
import 'styled-components/macro';
import { Table as ATable, Tag as ATag } from 'antd';

import styles from './styles';

const columns = [
    {
        title: 'Material',
        dataIndex: 'material',
        key: 'material',
        render: text => <a href="/">{text}</a>,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = 'volcano';
                    if (tag === 'neutral') {
                        color = 'geekblue';
                    }
                    if (tag === 'good') {
                        color = 'green';
                    }
                    return (
                        <ATag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </ATag>
                    );
                })}
            </span>
        ),
    },
];

const Table = (props) => {
    const { dataSource } = props;


    return <div className="module" css={styles}>
        <ATable columns={columns} dataSource={dataSource} pagination={{ defaultPageSize: '5' }} />
    </div>
}

export default Table;
