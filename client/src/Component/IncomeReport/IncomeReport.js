import React from 'react';
import './IncomeReport.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';

const componentName = () => {
    return (
        <div className='inc'>
            <div className='i-r'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Income Report</h1>
                    <p className='p-i-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et voluptatum non fugiat saepe in. <br />Quo architecto dicta temporibus.</p>
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th colSpan={3}>Income Report</th>
                      
                    

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>sl</td>
                            <td colSpan={2}>Particulars</td>
                            <td>Amount</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td rowSpan={6}>Income</td>
                            <td>Total Paid Balance by Company</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td>
                            
                            <td>Daily Paid Balance by Company</td>
                            <td>0.00</td>

                        </tr>
                     
                        <tr>
                            <td></td>
                            
                            <td>Sponsor income from Company</td>
                            <td>0.00</td>

                        </tr>
                     
                        <tr>
                            <td></td>
                            
                            <td>Generation income fro Company</td>
                            <td>0.00</td>

                        </tr>
                     
                        <tr>
                            <td></td>
                            
                            <td>Monthly Salary from Company</td>
                            <td>0.00</td>

                        </tr>
                     
                        <tr>
                            <td></td>
                            
                            <td>Monthly Agent income from Company</td>
                            <td>0.00</td>

                        </tr>
                     
                  
                        <tr>
                            <td></td>
                            <td colSpan={2}>total income</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td rowSpan={1}>Expense</td>
                            <td>Withdrawal</td>
                            <td>0.00</td>

                        </tr>
                   
                        <tr>
                            <td></td>
                            <td colSpan={2}>Total Expense</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2}>Current Balance</td>
                            <td>0.00</td>

                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default componentName;