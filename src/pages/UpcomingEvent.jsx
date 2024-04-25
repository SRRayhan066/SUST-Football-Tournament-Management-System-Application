import React, { useState } from 'react';
import '../css/tournament.css'
import { Button, Table, Card, Tag, Modal, Alert } from 'antd';

import { IoCaretBackOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";

import AddTournament from '../components/AddTournament';


const UpcomingEvent = () => {

    const [showForm,setShowForm] = useState(false);
    const [success,setSuccess] = useState(false);

    const showIt = () =>{
        setShowForm(true);
    }

    const hideIt = () =>{
        setShowForm(false);
    }

    const closeIt = () =>{
        setSuccess(false);
    }

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
            width: 300,
            align: 'center'
        },
        {
            title:'Start Date',
            dataIndex:'startDate',
            key:'startDate',
            align: 'center',
            width: 180,
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
                const startDate = new Date(records.startDate);
                if(currentDate<startDate) return <Tag color='#F0CD1B'>Upcoming</Tag>
                return (currentDate>endDate ? <Tag color='#87d068'>Finished</Tag> : <Tag color='#108ee9'>Running</Tag>) 
            }
        },
        {
            title:'Action',
            key:'action',
            align: 'center',
            
            render: (text,record)=>{
                return (
                    <>
                        <Button className='edit-button' type='default'>Edit</Button>
                        <Button className='see-details-button' onClick={()=>{handleButtonClicked(record)}} type='primary'>See Details</Button>    
                    </>
                )
                
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
            startDate:'2025-01-12',
            endDate:'2025-06-12'
        },
        {
            key:'3',
            serialNo:'3',
            tournamentName:'Intra SUST Football Tournament-2024',
            startDate:'2024-01-12',
            endDate:'2024-06-12'
        }
    ]
    return (
        <div>

            <div className="tournament-container">
                <div className="tournament-container-heading">
                    <div className="tournament-container-headings">
                        <h2>Upcoming Events</h2>
                        <Button icon={<IoCaretBackOutline />} className='back-button' size='large'>Back</Button>
                        <Button icon={<FaPlusCircle />} className='add-tournament-button' size='large' onClick={showIt}>Add Tournament</Button>
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

            <Modal
                title='Successfully added'
                visible={success}
                footer={[
                    <Button key="close" onClick={closeIt}>Close</Button>
                ]}
            ></Modal>
            
            <Modal
             title='Add Tournament'
             visible={showForm}
             onCancel={hideIt}
            //  footer={null}
            footer={[
                <Button key="cancel" onClick={hideIt}>
                    Cancel
                </Button>,
                // <Button key="submit" type="primary">
                //     Submit
                // </Button>,
            ]}
            >
                <AddTournament hideIt={hideIt} setSuccess={setSuccess}/>
            </Modal>
        </div>
    );
};

export default UpcomingEvent;