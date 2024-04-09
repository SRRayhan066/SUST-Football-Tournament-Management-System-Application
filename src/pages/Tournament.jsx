import React from 'react';
import '../css/tournament.css'
import { Button, Table, Card, Tag } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';

import { IoCaretBackOutline } from "react-icons/io5";
import { render } from 'react-dom';

const Tournament = () => {
    const columns = [
        {
            title:'Serial No.',
            dataIndex:'serialNo',
            key:'serialNo',
            align:'center',
            width: 100
        },
        {
            title:'Tournament Name',
            dataIndex:'tournamentName',
            key:'tournamentName',
            width: 400,
            align: 'center'
        },
        {
            title:'Start Date',
            dataIndex:'startDate',
            key:'startDate',
            align: 'center',
            sorter: (a,b)=>new Date(a.startDate) - new Date(b.startDate),
            sortDirections: ['descend']
        },
        {
            title:'End Date',
            dataIndex:'endDate',
            key:'endDate',
            align: 'center',
            sorter: (a,b)=>new Date(a.endDate) - new Date(b.endDate),
            sortDirections: ['descend']
        },
        {
            title:'Status',
            key:'status',
            align:'center',
            filters: [
                {text:'Running',value:'Running'},
                {text:'Finished',value:'Finished'},
            ],
            onFilter:(value,record)=>{
                const currentDate = new Date();
                const endDate = new Date(record.endDate);
                return value === 'Running' ? currentDate <= endDate : currentDate > endDate;
            },
            render: (_,records)=>{
                const currentDate = new Date();
                const endDate = new Date(records.endDate);
                return (currentDate>endDate ? <Tag color='#87d068'>Finished</Tag> : <Tag color='#108ee9'>Running</Tag>) 
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
            tournamentName:'Intra SUST Football Tournament-2022',
            startDate:'2022-01-12',
            endDate:'2022-02-12'
        },
        {
            key:'2',
            serialNo:'2',
            tournamentName:'Intra SUST Football Tournament-2023',
            startDate:'2023-01-12',
            endDate:'2023-06-12'
        },
        {
            key:'3',
            serialNo:'3',
            tournamentName:'Intra SUST Football Tournament-2024',
            startDate:'2024-01-12',
            endDate:'2024-06-12'
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
                        <h2>Tournaments</h2>
                        <Button icon={<IoCaretBackOutline />} className='back-button' size='large'>Back</Button>
                        <Card
                            className='total-tournament-card'
                            style={{
                                height: 35,
                                width: 200,
                            }}
                        >
                            <p>Tournaments: 100</p>
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

export default Tournament;