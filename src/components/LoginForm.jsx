import React from 'react';
import { Form, Button, Input } from 'antd';
import '../css/loginForm.css'

const LoginForm = () => {
    return (
        <div>
            <div className="login-form-container">
                <Form autoComplete='off' labelCol={{span:5}} wrapperCol={{span:16}}>
                    <Form.Item label='E-mail' name='email' rules={[
                        {required:true,message:'Enter your e-mail'},
                        {type:'email',message:'Please enter a valid e-mail'}]} hasFeedback>
                        <Input placeholder='E-mail'></Input>
                    </Form.Item>
                    <Form.Item label='Password' name='password' rules={[{required:true,message:'Enter a password'},{min:6}]} hasFeedback>
                        <Input type='password' placeholder='Password'></Input>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset:5,span:16}}>
                        <Button size='large' className='login-button' type='primary' htmlType='submit' block>Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginForm;