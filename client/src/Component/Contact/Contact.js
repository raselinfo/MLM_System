import React, { useRef } from 'react';
import './Contact.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { MdLocationPin } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const ComponentName = () => {


    const nameRef = useRef();
    const emailRef = useRef();
    const textRef = useRef();



    const handleAddContact = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const text = textRef.current.value;


        const newContact = { name, email, text };


        fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newContact)
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




    return (
        <div>
            <div className='c-u'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Contact With Us.</h1>
                    <p className='p-i-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et voluptatum non fugiat saepe in. <br />Quo architecto dicta temporibus.</p>
                </div>
            </div>
            <div className='contact container'>

                <form onSubmit={handleAddContact} className="c-m">

                    <input className="up-input mt-3" ref={nameRef} placeholder="Name" />
                    <br />
                    <input className="up-input mt-3" ref={emailRef} type="email" placeholder="Email" />
                    <br />
                    <textarea className="up-input text mt-3" ref={textRef} placeholder="write massage" />
                    <br />
                    <input className="up-b mt-3" type="submit" value="Sent" />

                </form>
                <div className='c-i-in'>
                    <div className='d-flex mt-4'>
                        <MdLocationPin className='con-i' />
                        <h6 className='con-h6'>CT House, Unit 8, Office No 8H,<br/> Providence Mahe Seychelles</h6>
                    </div>
                    <div className='d-flex mt-4'>
                        <MdPhoneEnabled className='con-i' />
                        <h6 className='con-h6 mt-2'>+91-976-636-2403</h6>
                    </div>
                    <div className='d-flex mt-4'>
                        <MdEmail className='con-i' />
                        <h6 className='con-h6 mt-2'>sales@dotphi.com</h6>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ComponentName;