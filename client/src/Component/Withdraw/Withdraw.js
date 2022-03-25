import React, { useEffect, useRef, useState } from 'react';
import './Withdraw.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'

const ComponentName = () => {

    
    const [wic, setWic] = useState([]);

    
    const nameRef = useRef();
    const amountRef = useRef();
    const optionRef = useRef();
    const acnRef = useRef();
    const aunRef = useRef();



    const handleWithdraeReq = e => {
        const name = nameRef.current.value;
        const amount = amountRef.current.value;
        const withdrawOption = optionRef.current.value;
        const accountNumber = acnRef.current.value;
        const agentUserName = aunRef.current.value;


        const newWithdraw = { name, amount, withdrawOption, accountNumber, agentUserName };


        fetch('http://localhost:5000/wic', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newWithdraw)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Request Successfully');
                    e.target.reset();
                }
            })


        e.preventDefault();
    }



    useEffect(() => {
        fetch('http://localhost:5000/wic')
            .then(res => res.json())
            .then(data => setWic(data))
    }, [])







    return (
        <div>
            <div className='w-b'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Withdraw</h1>
                    <p className='p-i-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et voluptatum non fugiat saepe in. <br />Quo architecto dicta temporibus.</p>
                </div>
            </div>
            <div className='pu-from container flex'>
                <form onSubmit={handleWithdraeReq} className="up-form mt-5 withdraw">
                    <h4 className='up-h4'>Withdraw Request</h4>
                    <h6>Your Balance: 748.00 </h6>
                    <h6 className='up-p mt-2'>Name</h6>
                    <input className="up-input"  ref={nameRef} placeholder="Name" />
                    <br />
                    <h6 className='up-p mt-2'>Amount</h6>
                    <input className="up-input" type="number" ref={amountRef} placeholder="Enter Amount" />
                    <br />

                    <h6 className='up-p mt-2'>Option</h6>
                    <select className="up-input mt-1" aria-label="Select Option"  ref={optionRef}>
                        <option selected>Select Option</option>
                        <option>Bkash</option>
                        <option>Nagad</option>
                    </select>
                    <h6 className='up-p mt-2'>Bkash/Nagad Ac Number</h6>
                    <input className="up-input" type="number" placeholder="Bkash/Nagad Ac Number"  ref={acnRef}/>
                    <br />
                    <h6 className='up-p mt-2'>Select Agent User Name</h6>
                    <select className="up-input mt-1" aria-label="Select Select Agent User Name"  ref={aunRef}>
                        <option selected>Select Agent User Name</option>
                        <option>admin(Head Office)</option>
                    </select>




                    <input className="up-b mt-3" type="submit" value="Calculate" />

                </form>

               {
                   wic.map(wic =>  <div className='w-bill'>
                   <div className='d-f2'>
                       <h6>Name:</h6>
                       <h6>{wic.name}</h6>
                   </div>
                   <div className='d-f2 mt-2'>
                       <h6>Number:</h6>
                       <h6>{wic.accountNumber}</h6>
                   </div>
                   <div className='d-f2 mt-2'>
                       <h6>Withdraw Type:</h6>
                       <h6>{wic.withdrawOption}</h6>
                   </div>
                   <div className='d-f2 mt-2'>
                       <h6>Agent Name:</h6>
                       <h6>{wic.agentUserName}</h6>
                   </div>
                   <div className='d-f2 mt-2'>
                       <h6>Amount:</h6>
                       <h6>{wic.amount}</h6>
                   </div>
                   <div className='d-f2 mt-2'>
                       <h6>Service Charge:</h6>
                       <h6>5%</h6>
                   </div>
                   <div className='d-f mt-2'>
                       <h6>Total:</h6>
                       <h6>2375</h6>
                   </div>
                   <div className='d-flex'>
                   <button className="up-b bbm mt-3">Cancel</button>
                   <input className="up-b mt-3 ms-2" type="submit" value="Withdraw" />
                   </div>

               </div>)
               }

            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;