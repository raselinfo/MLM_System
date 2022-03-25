import React, { useEffect, useState } from 'react';
import './UserRequest.css'

const UserRequest = () => {


    const [userR, setUserR] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/client-request')
            .then(res => res.json())
            .then(data => setUserR(data))
    }, [])




    return (
        <div>
            <h2>
                User Request
            </h2>
            {
                userR.map(user => <div className='user-r-box'>
                    <img src={`data:image/png;base64,${user.profilePic}`} alt='ggg' />
                    <h6>User ID: {user._id}</h6>
                    <h6>Account-Type: {user.accountType}</h6>
                    <h6>Refer ID: {user.referId}</h6>
                    <h6>Name: {user.name}</h6>
                    <h6>Father's Name: {user.fatherName}</h6>
                    <h6>Mother's Name: {user.motherName}</h6>
                    <h6>Nominee Name: {user.nomineeName}</h6>
                    <h6>Date Of Birth: {user.dateOfBirth}</h6>
                    <h6>Nid/Birth: {user.nidBirth}</h6>
                    <h6>Profession: {user.profession}</h6>
                    <h6>{user.referId}</h6>
                    <h5>Address:</h5>
                    <h6>UpZilla: {user.upzilla}, Post: {user.post}, District: {user.district}, Division: {user.division}</h6>
                    <button className="up-b bbm mt-3">Active</button>
                </div>)
            }
        </div>
    );
};

export default UserRequest;