import { Form, Input, Radio, Select, Button, Alert } from 'antd';
import React, { useState } from 'react';
import '../css/registrationForm.css';

import axios from 'axios';

const RegistrationForm = ({setLoginStatus,setRegistrationSuccess}) => {

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

    const handleSubmit = (event) =>{
        console.log(event);
        // event.preventDefault();
        axios.post("http://localhost:8081/user/signup",event)
        .then(res=>{
            console.log(res);
            setLoginStatus(true);
            setRegistrationSuccess(true);
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            
            <div className="registration-form-container">
                
                <Form onFinish={handleSubmit} autoComplete='off' labelCol={{span:7}} wrapperCol={{span:14}}>
                    <Form.Item label='Name' name='name' rules={[
                        {required:true,message:'Enter your username'},
                        {whitespace: true},
                        {min: 3}
                        ]} hasFeedback>
                        <Input placeholder='Username'></Input>
                    </Form.Item>
                    <Form.Item label='E-mail' name='email' rules={[
                        {required:true,message:'Enter your e-mail'},
                        {type:'email',message:'Please enter a valid e-mail'}]} hasFeedback>
                        <Input placeholder='E-mail'></Input>
                    </Form.Item>
                    <Form.Item label='Password' name='password' rules={[{required:true,message:'Enter a password'},{min:6}]} hasFeedback>
                        <Input type='password' placeholder='Password'></Input>
                    </Form.Item>

                    <Form.Item label='Confirm Password' dependencies={['password']} name='confirmPassword' rules={[
                        {required:true,message:'Enter a password'},
                        ({getFieldValue})=>({
                            validator(_,value){
                                if(!value || getFieldValue('password') === value){
                                    return Promise.resolve();
                                }else return Promise.reject("Password doesn't match");
                            }
                        })]} hasFeedback>
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
                        <Form.Item label='Department' name='department' rules={[{required:true,message:'Enter your department'}]} hasFeedback>
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
                        <Form.Item label={onLabelChange()} name='id' rules={[{required:true,message:'Enter required id'},
                            { validator: (_, value) => {
                                const numberValue = parseInt(value, 10);
                                if (value!=='' && isNaN(numberValue)) {
                                    return Promise.reject('Please enter a valid number');
                                }
                                return Promise.resolve();
                            }},
                            {max:10},{min:10}
                        ]} hasFeedback>
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