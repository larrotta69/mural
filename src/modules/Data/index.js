import React from 'react';
import { Alert, Button } from 'antd';

import Form from '../../components/Form';

const buttons = ['success', 'info', 'warning', 'error'];

const alerts = buttons.map(alert => ({
    message: `${alert} message`,
    description: `Detailed description and advice about ${alert}.`,
    type: alert
}));

class Data extends React.Component {
    state = {
        alert: 'success'
    }

    setAlert = (alert) => {
        this.setState({ alert })
    }

    render() {
        const { alert } =  this.state;
        
        return <div className="alert-module">
            <div className="module">
                <Form />
            </div>
            <div className="module">
                {buttons.map(button => <Button
                    key={button}
                    type="primary"
                    onClick={() => { this.setAlert(button) }}
                >
                    { button }
                </Button>)}
            </div>
            <div className="module">
                {alerts.map(item => <Alert
                    key={item.type}
                    className={ `${alert === item.type ? 'alert-shown' : ''}` }
                    showIcon
                    {...item}
                />)}
            </div>
        </div>
    }
}

export default Data;
