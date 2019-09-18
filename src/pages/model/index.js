import React from 'react';
import 'styled-components/macro';
import { Layout } from 'antd';
import './styles.css';

import Header from '../../components/Header';
import Card from '../../components/Card';

import defaultProject from '../../img/default.png';
import designProject from '../../img/design.png';

class Model extends React.Component {
    render() {
        return (
            <Layout className="home">
                <Header/>
                <div className="content">
                    <Card imgSrc={defaultProject} description="Use our pre-designed projects" title="Default Project" />
                    <Card imgSrc={designProject} description="Create your own project" title="Model your Project" />
                </div>
            </Layout>
        );
    }
}

export default Model;
