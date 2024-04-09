import React from 'react';
import '../css/tournament.css'
import { Button, Table, Card, Tag } from 'antd';
import { IoCaretBackOutline } from "react-icons/io5";
import 'antd/dist/reset.css';

const Refrees = () => {

    const columns = [
        {
            title:'Serial No.',
            dataIndex:'serialNo',
            key:'serialNo',
            align:'center',
            width: 100
        },
        {
            title:'Refree Id',
            dataIndex:'refreeId',
            key:'refreeId',
            width: 400,
            align: 'center'
        },
        {
            title:'Name',
            dataIndex:'refreeName',
            key:'refreeName',
            align: 'center'
        },
        {
            title:'Institute',
            dataIndex:'institute',
            key:'institute',
            align: 'center'
        },    
    ]

    const dataSource = [
        {
            serialNo:'1',
            refreeId:'1001',
            refreeName:'Abul khayer',
            institute:'BFF'
        },
        {
            serialNo:'2',
            refreeId:'1002',
            refreeName:'Abul kalam',
            institute:'BFF'
        },
        {
            serialNo:'3',
            refreeId:'1003',
            refreeName:'Abul Hasem',
            institute:'BFF'
        }
    ]
    return (
        <div>
            <div className="tournament-container">
                <div className="tournament-container-heading">
                    <div className="tournament-container-headings">
                        <h2>Refree</h2>
                        <Button icon={<IoCaretBackOutline />} className='back-button' size='large'>Back</Button>
                        <Card
                            className='total-tournament-card'
                            style={{
                                height: 35,
                                width: 200,
                            }}>
                            <p>Refrees: 100</p>
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

export default Refrees;