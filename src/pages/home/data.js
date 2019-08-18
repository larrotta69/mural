import React from 'react';

const contentDesign = () => {
    return <h2>Design</h2>
}

const contentMaterials = () => {
    return <h2>Materials</h2>
}

const contentInfo = () => {
    return <h2>Info</h2>
}

export default {
    tabs: [
        {
            id: 1,
            title: 'Design',
            content: contentDesign,
            icon: 'border-inner'
        },
        {
            id: 2,
            title: 'Materials',
            content: contentMaterials,
            icon: 'table'
        },
        {
            id: 3,
            title: 'Info',
            content: contentInfo,
            icon: 'fund'
        },
    ]
}
