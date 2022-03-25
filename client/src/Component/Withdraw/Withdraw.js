import React, { useEffect, useRef, useState } from 'react';
import './Withdraw.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import WBill from './WBill/WBill'

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



        const newCart = newWithdraw;
        setWic(newCart);




        e.preventDefault();
        e.target.reset();
    }





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
                    <h4>Your Balance: 748.00 </h4>
                    <h6 className='up-p mt-2'>Name</h6>
                    <input className="up-input" ref={nameRef} placeholder="Name" />
                    <br />
                    <h6 className='up-p mt-2'>Amount</h6>
                    <input className="up-input" type="number" ref={amountRef} placeholder="Enter Amount" />
                    <br />

                    <h6 className='up-p mt-2'>Option</h6>
                    <select className="up-input mt-1" aria-label="Select Option" ref={optionRef}>
                        <option selected>Select Option</option>
                        <option>Bkash</option>
                        <option>Nagad</option>
                    </select>
                    <h6 className='up-p mt-2'>Bkash/Nagad Ac Number</h6>
                    <input className="up-input" type="number" placeholder="Bkash/Nagad Ac Number" ref={acnRef} />
                    <br />
                    <h6 className='up-p mt-2'>Select Agent User Name</h6>
                    <select className="up-input mt-1" aria-label="Select Select Agent User Name" ref={aunRef}>
                        <option selected>Select Agent User Name</option>
                        <option>admin(Head Office)</option>
                    </select>




                    <input className="up-b mt-3" type="submit" value="Calculate" />

                </form>

                <div>
                    <WBill
                        wic={wic}
                    ></WBill>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;