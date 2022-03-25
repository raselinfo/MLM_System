import React from 'react';
import './GenerationReport.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';

const componentName = () => {
    return (
        <div>
            <div className='g-p'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Generation Commission</h1>
                    <p className='p-i-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et voluptatum non fugiat saepe in. <br />Quo architecto dicta temporibus.</p>
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Particular</th>
                            <th>From</th>
                            <th>Amount</th>
                            <th>Income</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>13 Jan, 2022</td>
                            <td>1thGeneration</td>
                            <td>Erany7</td>
                            <td>20000</td>
                            <td>200.00</td>
                         
                        </tr>
                 
                   
                        <tr>
                            <td colSpan={4}>Total</td>
                            <td>200.00</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default componentName;