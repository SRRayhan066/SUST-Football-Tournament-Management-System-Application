import React from 'react';
import '../css/tournament.css'
import { Button, Table, Card, Tag } from 'antd';
import { IoCaretBackOutline } from "react-icons/io5";
import 'antd/dist/reset.css';

const TeamsPendingRequest = () => {
    const columns = [
        {
            title:'Serial No.',
            dataIndex:'serialNo',
            key:'serialNo',
            align:'center',
            width: 100
        },
        {
            title:'Team Name',
            dataIndex:'teamName',
            key:'teamName',
            width: 400,
            align: 'center'
        },
        {
            title:'Manager',
            dataIndex:'managerName',
            key:'managerName',
            align: 'center'
        },
        {
            title:'Action',
            key:'action',
            align: 'center',    
            render: (text,record)=>{
                return <>
                    <Button className='see-details-button' onClick={()=>{handleButtonClicked(record)}} type='primary'>Accept</Button>
                    <Button className='reject-button' onClick={()=>{handleButtonClicked(record)}} type='primary' danger>Reject</Button>
                </>
            }
        }
    ]

    const dataSource = [
        {
            key:'1',
            serialNo:'1',
            teamName:'Software Engineering',
            managerName:'Partha Pratim Paul',
        },
        {
            key:'2',
            serialNo:'2',
            teamName:'Civil Engineering and Environmental Science',
            managerName:'Dr. Basar',
        },
        {
            key:'3',
            serialNo:'3',
            teamName:'Electrical and Electronics Engineering',
            managerName:'Suchi',
        },
        {
            key:'4',
            serialNo:'4',
            teamName:'Industrial and Productional Engineering',
            managerName:'Abul Basar',
        },
        {
            key:'5',
            serialNo:'5',
            teamName:'Architecture',
            managerName:'Abul Khayer',
        },
        {
            key:'6',
            serialNo:'6',
            teamName:'Computer Science and Engineering',
            managerName:'Dr. Ranju',
        },
        {
            key:'7',
            serialNo:'7',
            teamName:'Food Engineering and Tea Technology',
            managerName:'Zahidul Islam Utpal',
        }
    ]

    const handleButtonClicked = (records) =>{
        console.log(records);
    }
    return (
        <div>
            <div className="tournament-container">
                <div className="tournament-container-heading">
                    <div className="tournament-container-headings">
                        <h2>Teams</h2>
                        <Button icon={<IoCaretBackOutline />} className='back-button' size='large'>Back</Button>
                    </div>
                </div>
                <div className="tournament-table-container">
                    <Table className='table-class' columns={columns} dataSource={dataSource}
                        scroll={{
                            y: 430,
                        }}
                        pagination={{
                            showSizeChanger: true,
                            style:{
                                marginRight:'15px'
                            }
                        }}
                    ></Table>
                </div>
            </div>
        </div>
    );
};

export default TeamsPendingRequest;