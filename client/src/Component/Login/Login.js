import React, { useState } from 'react';
import './Login.css'
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'

const ComponentName = () => {


    const [loginData, setLoginData] = useState({});

    const { registerUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not Matched');
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, location, history);
        e.preventDefault();

    }


  




    return (
        <div>
            <div className='p-i'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Personal Information</h1>
                    <p className='p-i-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et voluptatum non fugiat saepe in. <br />Quo architecto dicta temporibus.</p>
                </div>
            </div>

            <div className='formL container'>
                <h4 className='mis-h1 '>Login</h4>


                <form onSubmit={handleLoginSubmit} className="login-form">
                                <br />
                                <input className="log-input mt-2" name="name" onChange={handleOnChange} placeholder="Name" />
                                <br />
                                <input className="log-input mt-4" type="email" name="email" onChange={handleOnChange} placeholder="Email Address" />
                            
                                <input className="log-input mt-4" type="password" name="password" onChange={handleOnChange} placeholder="your Password" />
                            
                                <input className="log-input mt-4" type="password" name="password2" onChange={handleOnChange} placeholder="Re-Type your Password" />
                                <br />

                                <Button className="log-b mt-3 btn" type="submit" value="Submit">Register</Button>
                               
                            </form>


            </div>
            <Footer/>
        </div>
    );
};

export default ComponentName;