import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, Alert } from 'antd';
import '../css/tournament.css';
import axios from 'axios';
import moment from 'moment'


const AddTournament = ({hideIt,setSuccess}) => {
    const {RangePicker} = DatePicker;
    const [postSuccess,setPostSuccess] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = (event) =>{
        const token = localStorage.getItem('token');
        console.log(event);
        const values = {
            tournamentId : event.tournamentName,
            tournamentName : event.tournamentName,
            startDate : moment(event.date[0]).format('YYYY-MM-DD'),
            endDate : moment(event.date[1]).format('YYYY-MM-DD')
        };
        console.log(values);
        axios.post("http://localhost:8081/tournament/addTournament",values,{
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>{
            console.log(res);
            setSuccess(true);
            form.resetFields();
            hideIt();
        })
        .catch(err=>console.log(err));
    }

    return (
        <div>
            <div>
                <Form form={form} onFinish={handleSubmit} labelCol={{span:8}} wrapperCol={{span:16}}>
                    <Form.Item label='Tournament Name' name='tournamentName'>
                        <Input placeholder='Tournament Name'></Input>
                    </Form.Item>
                    <Form.Item label='Event Time' name='date'>
                        <RangePicker/>
                    </Form.Item>
                    <Button className='add-tournament' type='primary' htmlType='submit'>SUBMIT</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddTournament;