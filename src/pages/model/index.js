import React from 'react';
import 'styled-components/macro';
import { Layout, Row, Col } from 'antd';
import './styles.css';

import Header from '../../components/Header';

import model from '../../img/model.png';

class Model extends React.Component {
    render() {
        return (
            <Layout className="model">
                <Row>
                    <Header/>
                </Row>
                <Row className="wrapper">
                    <Col>
                        <img alt="model" src={model} />
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default Model;
