import React from 'react';
import '../css/tournament.css'
import { Button, Table, Card } from 'antd';

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
            align: 'center'
        },
        {
            title:'End Date',
            dataIndex:'endDate',
            key:'endDate',
            align: 'center'
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
            tournamentName:'Intra SUST Football Tournament-2022',
            startDate:'2022-01-12',
            endDate:'2022-02-12'
        },
        {
            key:'3',
            serialNo:'3',
            tournamentName:'Intra SUST Football Tournament-2022',
            startDate:'2022-01-12',
            endDate:'2022-02-12'
        },
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
            tournamentName:'Intra SUST Football Tournament-2022',
            startDate:'2022-01-12',
            endDate:'2022-02-12'
        },
        {
            key:'3',
            serialNo:'3',
            tournamentName:'Intra SUST Football Tournament-2022',
            startDate:'2022-01-12',
            endDate:'2022-02-12'
        },
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
            tournamentName:'Intra SUST Football Tournament-2022',
            startDate:'2022-01-12',
            endDate:'2022-02-12'
        },
        {
            key:'3',
            serialNo:'3',
            tournamentName:'Intra SUST Football Tournament-2022',
            startDate:'2022-01-12',
            endDate:'2022-02-12'
        },
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
            tournamentName:'Intra SUST Football Tournament-2022',
            startDate:'2022-01-12',
            endDate:'2022-02-12'
        },
        {
            key:'3',
            serialNo:'3',
            tournamentName:'Intra SUST Football Tournament-2022',
            startDate:'2022-01-12',
            endDate:'2022-02-12'
        },
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