import React from 'react';
import { Button, Table, Card, Tag, Divider } from 'antd';

import { IoCaretBackOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import '../css/quarterFinal.css';


const Final = () => {
    return (
        <div>
            <div className="tournament-container">
                <div className="tournament-container-heading">
                    <div className="tournament-container-headings">
                        <h2>Final</h2>
                        <Button icon={<IoCaretBackOutline />} className='back-button' size='large'>Back</Button>
                    </div>
                </div>
                <div className="quarter-final-match-class">
                    <div className="final-line">
                        <Card className='cards' title="CEE vs SWE" extra={<Button>Edit</Button>}>
                            <div className="score-container">
                                <div className="goal-container">
                                    {/* <Divider orientationMargin='0' plain>Goals</Divider> */}
                                    <div className="team-1">
                                        <p>Abdul Hakim : 01</p>
                                        <p>Abdul Sattar : Yellow</p>
                                    </div>
                                    <div className="team-2">
                                        <p>Rayhan : 01</p>
                                        <p>Avik : 01</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </Card>
                    </div>                
                </div>
            </div>
        </div>
    );
};

export default Final;