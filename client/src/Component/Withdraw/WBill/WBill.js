import React, { useRef, useState } from 'react';

const ComponentName = (props) => {

    const { name, amount, withdrawOption, accountNumber, agentUserName } = props.wic;

    let total = amount * 5 /100;

    let totalCost = amount - total;

 


    return (
        <div>
             <div className='w-bill'>
                    <div className='d-f2'>
                        <h6>Name:</h6>
                        <h6>{name}</h6>
                    </div>
                    <div className='d-f2 mt-2'>
                        <h6>Number:</h6>
                        <h6>{accountNumber}</h6>
                    </div>
                    <div className='d-f2 mt-2'>
                        <h6>Withdraw Type:</h6>
                        <h6>{withdrawOption}</h6>
                    </div>
                    <div className='d-f2 mt-2'>
                        <h6>Agent Name:</h6>
                        <h6>{agentUserName}</h6>
                    </div>
                    <div className='d-f2 mt-2'>
                        <h6>Amount:</h6>
                        <h6>{amount}</h6>
                    </div>
                    <div className='d-f2 mt-2'>
                        <h6>Service Charge:</h6>
                        <h6>5%</h6>
                    </div>
                    <div className='d-f mt-2'>
                        <h6>Total:</h6>
                        <h6>{totalCost}</h6>
                    </div>
                    <div className='d-flex'>
                    <button className="up-b mt-3 ms-2" onSubmit=''>Withdraw</button>
                    </div>

                </div> 
        </div>
    );
};

export default ComponentName;