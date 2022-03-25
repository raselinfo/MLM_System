import React from 'react';
import './WithdrawReport.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';

const componentName = () => {
    return (
        <div>
            <div className='w-b'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Withdraw Report</h1>
                    <p className='p-i-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et voluptatum non fugiat saepe in. <br />Quo architecto dicta temporibus.</p>
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Request</th>
                            <th>W.Charge</th>
                            <th>Withdraw</th>
                            <th>Balance</th>
                            <th>P.System</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2500</td>
                            <td>2500</td>
                            <td>125</td>
                            <td>2375</td>
                            <td>0</td>
                            <td>Bkash</td>
                            <td>16 Mar, 2022</td>
                            <td>Clear</td>
                        </tr>
                 
                   
                        <tr>
                            <td colSpan={2}>Total</td>
                            <td colSpan={2}></td>
                            <td>2375</td>
                            <td colSpan={4}></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default componentName;