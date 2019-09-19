import React from 'react';
import 'styled-components/macro';
import { Layout, Form, Select, Input, Row, Col, Button, Alert, Icon } from 'antd';
import './styles.css';

import Header from '../../components/Header';
import Card from '../../components/Card';

import profile from '../../img/profile.png';
import block_1 from '../../img/block_1.png';
import block_2 from '../../img/block_2.png';

const { Option } = Select;

class Design extends React.Component {
    render() {
        return (
            <Layout className="design">
                <Row>
                    <Header/>
                </Row>
                <Row className="wrapper">
                    <Col xs={10}>
                        <div className="form-content">
                            <Form>
                                <Form.Item label="Floor conditions:">
                                    <Select placeholder="Condition 1">
                                        <Option value="Condition">Condition 2</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Wall:">
                                    <Input placeholder="Wall height" />
                                    <Input placeholder="Wall width" />
                                </Form.Item>

                                <Form.Item label="Select the angle:">
                                    <Select placeholder="0 deg">
                                        <Option value="bc">0 deg</Option>
                                        <Option value="pe">9 deg</Option>
                                        <Option value="pe">17 deg</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Select the blocks:">
                                    <Row className="blocks">
                                        <Col xs={11}>
                                            <img alt="" src={block_1} />
                                        </Col>
                                        <Col xs={11} offset={2}>
                                            <img alt="" src={block_2} />
                                        </Col>
                                        <Col xs={11}>
                                            <img alt="" src={block_2} />
                                        </Col>
                                        <Col xs={11} offset={2}>
                                            <img alt="" src={block_2} />
                                        </Col>
                                    </Row>

                                </Form.Item>
                                <Row>
                                    <Col xs={12}>
                                        <Button type="primary" icon="fund" size="large">
                                            Calculate
                                        </Button>
                                    </Col>
                                    <Col xs={12}>
                                        <Button type="primary" size="large">
                                            3D Model
                                            <Icon type="right" />
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={14}>
                        <Alert
                            message="Success message"
                            description="Design is stable"
                            type="success"
                            showIcon
                        />
                        {/* <Alert
                            message="Error message"
                            description="Design is not stable"
                            type="error"
                            showIcon
                        /> */}
                        <div className="design-content">
                            <img alt="" src={profile} />
                        </div>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default Design;
