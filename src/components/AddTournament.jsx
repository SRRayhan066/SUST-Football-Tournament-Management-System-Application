import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

const AddTournament = () => {
    const {RangePicker} = DatePicker;
    return (
        <div>
            <div>
                <Form labelCol={{span:8}} wrapperCol={{span:16}}>
                    <Form.Item label='Tournament Name' name='tournamentName'>
                        <Input placeholder='Tournament Name'></Input>
                    </Form.Item>
                    <Form.Item label='Event Time' name='date'>
                        <RangePicker/>
                    </Form.Item>
                    {/* <Button className='add-tournament' >ADD</Button> */}
                </Form>
            </div>
        </div>
    );
};

export default AddTournament;