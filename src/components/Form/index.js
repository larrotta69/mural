import React from 'react';
import {
    Form as AForm,
    Select,
    InputNumber,
    Switch,
    Slider,
    Checkbox,
    Row,
    Col,
} from 'antd';

const { Option } = Select;

const Form = (props) => {
    const { form: { getFieldDecorator } } = props;
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };

    return <AForm {...formItemLayout}>
        <AForm.Item label="Select" hasFeedback>
            {getFieldDecorator('select', {
                rules: [{ required: true, message: 'Please select your country!' }],
            })(
                <Select placeholder="Please select a country">
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                </Select>,
            )}
        </AForm.Item>

        <AForm.Item label="Select[multiple]">
            {getFieldDecorator('select-multiple', {
                rules: [
                    { required: true, message: 'Please select your favourite colors!', type: 'array' },
                ],
            })(
                <Select mode="multiple" placeholder="Please select favourite colors">
                    <Option value="red">Red</Option>
                    <Option value="green">Green</Option>
                    <Option value="blue">Blue</Option>
                </Select>,
            )}
        </AForm.Item>

        <AForm.Item label="InputNumber">
            {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber min={1} max={10} />)}
            <span className="ant-form-text"> machines</span>
        </AForm.Item>

        <AForm.Item label="Switch">
            {getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch />)}
        </AForm.Item>

        <AForm.Item label="Slider">
            {getFieldDecorator('slider')(
                <Slider
                    marks={{
                        0: 'A',
                        20: 'B',
                        40: 'C',
                        60: 'D',
                        80: 'E',
                        100: 'F',
                    }}
                />,
            )}
        </AForm.Item>
    </AForm>
}

export default AForm.create({ name: 'validate_other' })(Form);
