import React from 'react';
import 'styled-components/macro';
import { Layout, Form, Select, Row, Col } from 'antd';
import './styles.css';

import Header from '../../components/Header';
import Card from '../../components/Card';

import defaultProject from '../../img/default.png';
import designProject from '../../img/design.png';

const { Option } = Select;

class App extends React.Component {
    render() {

        return (
            <Layout className="home">
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <Col span={6} offset={9}>
                        <div className="form-content">
                            <Form>
                                <Select placeholder="Canada">
                                    <Option value="china">Canada</Option>
                                </Select>
                                <Select placeholder="Please select a state">
                                    <Option value="bc">British Columbia</Option>
                                    <Option value="pe">Prince Edward Island</Option>
                                    <Option value="nb">New Brunswick</Option>
                                    <Option value="ns">Nova Scotia</Option>
                                    <Option value="nl">Newfoundland and Labrador</Option>
                                    <Option value="ab">Alberta</Option>
                                    <Option value="mb">Manitoba</Option>
                                    <Option value="on">Ontario</Option>
                                    <Option value="qc">Québec</Option>
                                    <Option value="sk">Saskatchewan</Option>
                                </Select>
                            </Form>
                        </div>
                    </Col>
                </Row>

                <div className="content">
                    <Card imgSrc={defaultProject} description="Use our pre-designed projects" title="Default Project" />
                    <Card imgSrc={designProject} description="Create your own project" title="Design your Project" />
                </div>
            </Layout>
        );
    }
}

export default App;
