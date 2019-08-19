import React from 'react';
import { Timeline, Statistic, Card, Row, Col, Icon, Alert } from 'antd';

const Info = (props) => {
    return <>
    <div className="module">
        <Row gutter={16}>
            <Col span={12}>
                <Card>
                    <Statistic
                        title="Active"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<Icon type="arrow-up" />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <Statistic
                        title="Idle"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<Icon type="arrow-down" />}
                        suffix="%"
                    />
                </Card>
            </Col>
        </Row>
    </div>
    <br />
    <br />
    <div className="module">
        <Timeline>
            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
        </Timeline>
        <br />
        <br />
        <div className="module">
            <Alert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
            />
            <Alert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
            />
            <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
            />
            <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
            />
        </div>
    </div>

</>
}

export default Info;
