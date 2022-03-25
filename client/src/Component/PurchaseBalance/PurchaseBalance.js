import React from 'react';
import './PurchaseBalance.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import { Table } from 'react-bootstrap';

const componentName = () => {
    return (
        <div className='pbb'>
            <div className='p-b'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Purchase Balance</h1>
                    <p className='p-i-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et voluptatum non fugiat saepe in. <br />Quo architecto dicta temporibus.</p>
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th colSpan={3}>Purchase Balance</th>
                      
                    

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
                            <td rowSpan={6}>Money Inflow</td>
                            <td>Transfer In from Company</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td>
                            
                            <td>Transfer In from Member</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td>
                            
                            <td>Internal Transfer In</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td>
                            
                            <td>Share Profit</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td>
                            
                            <td>Member Withdraw Fund</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td>
                            
                            <td>Account Load by Mobile Banking</td>
                            <td>0.00</td>

                        </tr>
                     
                 
                        <tr>
                            <td></td>
                            <td colSpan={2}>total in</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td rowSpan={4}>Expense</td>
                            <td>Joining Expense</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td> 
                            <td>Reward Purchase</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td> 
                            <td>Product Purchase</td>
                            <td>0.00</td>

                        </tr>
                        <tr>
                            <td></td> 
                            <td>Transfer (Out)</td>
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
            <Footer/>
        </div>
    );
};

export default componentName;