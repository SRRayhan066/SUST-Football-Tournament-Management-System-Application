import React from 'react';
import '../css/tournament.css'
import { Button, Table, Card, Tag } from 'antd';
import { IoCaretBackOutline } from "react-icons/io5";
import 'antd/dist/reset.css';

const Teams = () => {

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
            width: 300,
            align: 'center'
        },
        {
            title:'Manager',
            dataIndex:'managerName',
            key:'managerName',
            align: 'center'
        },
        {
            title:'Status',
            dataIndex:'status',
            key:'status',
            align:'center',
            render: (_,record)=>{
                
                if(record.status==='Champion'){
                    return <Tag color='#F1C40F' style={{fontSize:'medium'}}>{record.status}</Tag>
                }else if(record.status==='Runners-up'){
                    return <Tag color='#5D6D7E' style={{fontSize:'medium'}}>{record.status}</Tag>
                }else if(record.status==='2nd Runners-up'){
                    return <Tag color='#BA4A00' style={{fontSize:'medium'}}>{record.status}</Tag>
                }
                return <Tag color='default' style={{fontSize:'medium'}}>{record.status}</Tag>
            }
        },
        {
            title:'Action',
            key:'action',
            align: 'center',    
            render: (text,record)=>{
                return <Button className='see-details-button' onClick={()=>{handleButtonClicked(record)}} type='primary'>See Details</Button>
            }
        }
    ]

    const dataSource = [
        {
            key:'1',
            serialNo:'1',
            teamName:'Software Engineering',
            managerName:'Partha Pratim Paul',
            
            status:'Champion'
        },
        {
            key:'2',
            serialNo:'2',
            teamName:'Civil Engineering and Environmental Science',
            managerName:'Dr. Basar',
            status:'Runners-up'
        },
        {
            key:'3',
            serialNo:'3',
            teamName:'Electrical and Electronics Engineering',
            managerName:'Suchi',
            status:'Loose'
        },
        {
            key:'4',
            serialNo:'4',
            teamName:'Industrial and Productional Engineering',
            managerName:'Abul Basar',
            status:'Loose'
        },
        {
            key:'5',
            serialNo:'5',
            teamName:'Architecture',
            managerName:'Abul Khayer',
            status:'Loose'
        },
        {
            key:'6',
            serialNo:'6',
            teamName:'Computer Science and Engineering',
            managerName:'Dr. Ranju',
            status:'Loose'
        },
        {
            key:'7',
            serialNo:'7',
            teamName:'Food Engineering and Tea Technology',
            managerName:'Zahidul Islam Utpal',
            status:'Loose'
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
                        <Card
                            className='total-tournament-card'
                            style={{
                                height: 35,
                                width: 200,
                            }}>
                            <p>Teams: 100</p>
                        </Card>
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

export default Teams;