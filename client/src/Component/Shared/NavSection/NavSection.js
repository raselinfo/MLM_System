import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavSection.css'
import logo from '../../../Image/logo.png'
import { FaCheckDouble } from "react-icons/fa";
import { Link } from 'react-router-dom';


const componentName = () => {
    return (
        <div>
            <div className='nav-section'>
                <Navbar className='nav' collapseOnSelect expand="lg" variant="dark">

                    <Navbar.Brand href="#home">
                        <div className='d-flex'>
                            <img className='logo' src={logo} alt='' />
                            <div className='ms-1'>
                                <h5 className='logo-h5'>SB.ONE GLOBAL SHOP</h5>
                                <p className='logo-p'>MONEY MAKES MONEY</p>
                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-end">
                            <Nav.Link className='nav-i' as={Link} to='/'>HOME</Nav.Link>


                            <NavDropdown className='nav-i' title="PROFILE" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/personal-info'><FaCheckDouble className='n-icon' />Personal Info</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/profile-update'><FaCheckDouble className='n-icon' />Profile Update</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/uni-level-tree'><FaCheckDouble className='n-icon' />Unilevel Tree</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><FaCheckDouble className='n-icon' />Password Change</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown className='nav-i' title="ACCOUNT" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/income-report' ><FaCheckDouble className='n-icon' />Income Report</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/purchase-balance'><FaCheckDouble className='n-icon' />Purchase Balance</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/withdraw'><FaCheckDouble className='n-icon' />Withdraw</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/withdraw-report'><FaCheckDouble className='n-icon' />Withdraw Report</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/generation-report'><FaCheckDouble className='n-icon' />Generation Commission</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/refer-list'><FaCheckDouble className='n-icon' />Refer List</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown className='nav-i' title="MORE INFO" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/joining'><FaCheckDouble className='n-icon' />Joining</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><FaCheckDouble className='n-icon' />News</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/complain-box'><FaCheckDouble className='n-icon' />Complain Box</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/dashboard'><FaCheckDouble className='n-icon' />Dashboard</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='nav-i' as={Link} to='/contact-us'>CONTACT</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        </div>
    );
};

export default componentName;