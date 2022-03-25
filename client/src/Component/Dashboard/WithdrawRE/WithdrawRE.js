import React, { useEffect, useState } from 'react';
import './WithdrawRE.css'

const ComponentName = () => {

    
    const [withdrawR, setWithdrawR] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/withdraw-request')
            .then(res => res.json())
            .then(data => setWithdrawR(data))
    }, [])




    return (
        <div>
             <h2>
                Withdraw Request
            </h2>
            {
                withdrawR.map(withdraw => <div className='user-r-box'>
                      <h6>Name: {withdraw.name}</h6>
                    <h6>Amount: {withdraw.amount}</h6>
                    <h6>Withdraw Type: {withdraw.withdrawOption}</h6>
                    <h6>Account Number: {withdraw.accountNumber}</h6>
                    <h6>Agent Name: {withdraw.agentUserName}</h6>
                    <h6>Total Amount: {}</h6>
                    <button className="up-b bbm mt-3">Clear</button>
                </div>)
            }
        </div>
    );
};

export default ComponentName;