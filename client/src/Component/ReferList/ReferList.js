import React from 'react';
import './ReferList.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';

const componentName = () => {
    return (
        <div>
            <div className='r-l'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Refer List</h1>
                    <p className='p-i-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et voluptatum non fugiat saepe in. <br />Quo architecto dicta temporibus.</p>
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Name</th>
                            <th>Rank</th>
                            <th>Point</th>
                            <th>Type</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>saiful2</td>
                            <td>Md Saiful Islam</td>
                            <td>Member</td>
                            <td>6000</td>
                            <td>Premium</td>
                            <td>14 Dec, 2021 05:41 PM</td>

                        </tr>


                        <tr>
                            <td colSpan={3}>Total Point</td>
                            <td>6000</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default componentName;