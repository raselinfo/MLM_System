import React from 'react';
import './PersonalInfo.css'
import NavSection from '../Shared/NavSection/NavSection'
import TopSection from '../Shared/TopSection/TopSection'
import Footer from '../Shared/Footer/Footer'
import my from '../../Image/Personal-Info/my.jpg'
import { Table } from 'react-bootstrap';

const componentName = () => {
    return (
        <div className='pi-bc'>
            <div className='p-i'>
                <TopSection />
                <NavSection />
                <div className='container'>
                    <h1 className='p-i-h1'>Personal Information</h1>
                    <p className='p-i-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque et voluptatum non fugiat saepe in. <br />Quo architecto dicta temporibus.</p>
                </div>
            </div>
            <div className='pi-table mt-4 mb-5 container'>

                <div className='pi-top'>
                    <img className='pi-i' src={my} alt=''/>
                    <h6>Name: Md Saiful Islam</h6>
                </div>


                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Personal Information</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Name</td>
                            <td>Md Saiful Islam</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ID Status</td>
                            <td>Active</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>User</td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Rank</td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Father Name</td>
                            <td>Md Saifuddin Ahmmed</td>

                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Mother</td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Mobile</td>
                            <td>01735598174</td>

                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Date of Birth</td>
                            <td>10/08/1984</td>

                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Gender</td>
                            <td>Male</td>

                        </tr>
                        <tr>
                            <td>10</td>
                            <td>National ID</td>
                            <td>748393084300</td>

                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Email</td>
                            <td>saiful@gmail.com</td>

                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Religion</td>
                            <td>Muslim</td>

                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Blood Group</td>
                            <td>A+</td>

                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Address</td>
                            <td>District: 38,PS: 371, Upozila: , Union: 1894</td>

                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Refer to you</td>
                            <td>Sd Online Shop</td>

                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Placement ID</td>
                            <td>Sd Online Shop</td>

                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Join Date</td>
                            <td>09 Dec, 2021</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>My Unit</td>
                            <td>20051</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer/>
        </div>
    );
};

export default componentName;