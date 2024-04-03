import { Form, Input, Radio, Select, Button } from 'antd';
import React, { useState } from 'react';
import '../css/registrationForm.css';

const RegistrationForm = () => {

    const departments = ['CSE','EEE','SWE','IPE','CEP'];

    const [role,setRole] = useState('player');
    const onRoleSelected = (e) =>{
        //console.log(e.target.value);
        setRole(e.target.value);
        console.log(role);
    }

    const onLabelChange = () =>{
        switch(role){
            case 'player':
                return 'Registration No.';
            case 'manager':
                return 'Teacher Id';
            case 'admin':
                return null;
        }
    }

    return (
        <div>
            <div className="registration-form-container">
                <Form labelCol={{span:7}} wrapperCol={{span:14}}>
                    <Form.Item label='Name' name='name' rules={[{required:true,message:'Enter your username'}]}>
                        <Input placeholder='Username'></Input>
                    </Form.Item>
                    <Form.Item label='E-mail' name='email' rules={[{required:true,message:'Enter your e-mail'}]}>
                        <Input placeholder='E-mail'></Input>
                    </Form.Item>
                    <Form.Item label='Password' name='password' rules={[{required:true,message:'Enter a password'}]}>
                        <Input type='password' placeholder='Password'></Input>
                    </Form.Item>
                    <Form.Item label='Confirm Password' name='confirm password' rules={[{required:true,message:'Enter a password'}]}>
                        <Input type='password' placeholder='Confirm Password'></Input>
                    </Form.Item>
                    <Form.Item label='Role' name='role' rules={[{required:true,message:'Select a role'}]}>
                        <Radio.Group onChange={onRoleSelected} value={role}>
                            <Radio.Button value='player'>Player</Radio.Button>
                            <Radio.Button value='manager'>Manager</Radio.Button>
                            <Radio.Button value='admin'>Admin</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    {role!=='admin' && (
                        <Form.Item label='Department' name='department' rules={[{required:true,message:'Enter your department'}]}>
                            <Select placeholder='Select your department'>
                                {
                                    departments.map((dept,index)=>{
                                        return <Select.Option key={index} value={dept}>{dept}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                    )}

                    {role!=='admin' && (
                        <Form.Item label={onLabelChange()} name='id' rules={[{required:true,message:'Enter required id'}]}>
                            <Input placeholder={onLabelChange()}></Input>
                        </Form.Item>
                    )}    

                    <Form.Item wrapperCol={{offset:7,span:14}}>
                        <Button size='large' className='login-button' type='primary' htmlType='submit' block>Registration</Button>
                    </Form.Item>
                    
                </Form>
            </div>
        </div>
    );
};

export default RegistrationForm;