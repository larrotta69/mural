import React from 'react';

import Table from '../../components/Table';

const Materials = (props) => {
    const { columns, dataSource } = props;
    return <Table columns={columns} dataSource={dataSource} />
}

export default Materials;
