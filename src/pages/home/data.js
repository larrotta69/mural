import React from 'react';

import Design from '../../modules/Design';
import Data from '../../modules/Data';
import Materials from '../../modules/Materials';
import Info from '../../modules/Info';

const materialsData = [
    {
        key: '1',
        material: 'Material #1',
        amount: 32,
        address: 'New York No. 1 Lake Park',
        price: '$1000',
        tags: ['bad', 'good'],
    },
    {
        key: '2',
        material: 'Material #2',
        amount: 42,
        address: 'London No. 1 Lake Park',
        price: '$500',
        tags: ['neutral'],
    },
    {
        key: '3',
        material: 'Material #3',
        amount: 32,
        address: 'Sidney No. 1 Lake Park',
        price: '$6500',
        tags: ['good', 'neutral'],
    },
    {
        key: '4',
        material: 'Material #4',
        amount: 32,
        address: 'New York No. 1 Lake Park',
        price: '$1000',
        tags: ['bad', 'good'],
    },
    {
        key: '5',
        material: 'Material #5',
        amount: 42,
        address: 'London No. 1 Lake Park',
        price: '$500',
        tags: ['neutral'],
    },
    {
        key: '6',
        material: 'Material #6',
        amount: 32,
        address: 'Sidney No. 1 Lake Park',
        price: '$6500',
        tags: ['good', 'neutral'],
    },
    {
        key: '7',
        material: 'Material #7',
        amount: 32,
        address: 'New York No. 1 Lake Park',
        price: '$1000',
        tags: ['bad', 'good'],
    },
    {
        key: '8',
        material: 'Material #8',
        amount: 42,
        address: 'London No. 1 Lake Park',
        price: '$500',
        tags: ['neutral'],
    },
    {
        key: '9',
        material: 'Material #9',
        amount: 32,
        address: 'Sidney No. 1 Lake Park',
        price: '$6500',
        tags: ['good', 'neutral'],
    },
];

const tabs = [
    {
        id: 1,
        title: 'Design',
        content: <Design />,
        icon: 'border-inner'
    },
    {
        id: 2,
        title: 'Data',
        content: <Data />,
        icon: 'calculator'
    },
    {
        id: 3,
        title: 'Materials',
        content: <Materials dataSource={materialsData} />,
        icon: 'table'
    },
    {
        id: 4,
        title: 'Info',
        content: <Info />,
        icon: 'fund'
    },
]

export default { tabs };
