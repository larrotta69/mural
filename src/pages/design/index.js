import React from 'react';
import 'styled-components/macro';
import { Layout, Form, Select, Input, Row, Col } from 'antd';
import './styles.css';

import Header from '../../components/Header';
import Card from '../../components/Card';

import profile from '../../img/profile.png';

const { Option } = Select;

class Design extends React.Component {
    render() {
        return (
            <Layout className="design">
                <Row>
                    <Header/>
                </Row>
                <Row>
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

                            </Form>
                        </div>
                    </Col>
                    <Col xs={14}>
                        <div className="design-content">
                            <img src={profile} />
                        </div>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default Design;
