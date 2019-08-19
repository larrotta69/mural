import React from 'react';
import { Alert, Button } from 'antd';

import Form from '../../components/Form';

const buttons = ['success', 'info', 'warning', 'error']

class Design extends React.Component {
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
                    type="primary"
                    onClick={() => { this.setAlert(button) }}
                >
                    { button }
                </Button>)}
            </div>
            <div className="module">
                <Alert
                    className={ `${alert === 'success' ? 'alert-shown' : ''}` }
                    message="Success Tips"
                    description="Detailed description and advice about successful copywriting."
                    type="success"
                    showIcon
                />
                <Alert
                    className={ `${alert === 'info' ? 'alert-shown' : ''}` }
                    message="Informational Notes"
                    description="Additional description and information about copywriting."
                    type="info"
                    showIcon
                />
                <Alert
                    className={ `${alert === 'warning' ? 'alert-shown' : ''}` }
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                />
                <Alert
                    className={ `${alert === 'error' ? 'alert-shown' : ''}` }
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                />
            </div>
        </div>
    }
}

export default Design;
