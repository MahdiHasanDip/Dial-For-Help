import React from 'react';
import { Col,    Row } from 'react-bootstrap';
import {  Link, Outlet } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase/UseFirebase';
import "./Dashboard.css"

const Dashboard = () => {
    const {user,logOut,admin} = UseFirebase();
    return (
        <div className='dashboard-home'>
            
                <Row>
                    <Col className='aside-col'  xs={12} lg={3}>
                        <div className="aside">
                        <ul className="mt-3">
                            <li>
                              <Link style={{textDecoration:"none"}} to="/dashboard">  <span className="text"> Home </span> </Link>
                            </li>
                            <hr />
                            <li>
                              <Link style={{textDecoration:"none"}} to="/dashboard/admin">  <span className="text"> Make Admin </span>
                              </Link>
                            </li>
                            <hr />
                            <li>
                               <Link style={{textDecoration:"none"}} to="/dashboard/addservice"><span className="text">  Add Services</span></Link>
                            </li>
                            <hr />
                            <li>
                               <Link style={{textDecoration:"none"}} to="/dashboard/delete"> <span className="text"> Delete Services </span> </Link>
                             </li> 
                            <hr />   
                            <br />                      
                            <br />                      
                            <br />                      
                            <br />                      
                            <br />                      
                            <br />                      
                            <br />                      
                            <br />                      
                            <br />                      
                            <br />                      
                            <br />
                            <p>{user.email
                            }</p>  Admin
                            <hr />
                            <button className='btn btn-danger' onClick={logOut}>Logout</button> 
                        </ul>
                        </div>
                    </Col>
                    <Col className='window'  xs={12} lg={9}>
                        
                        
                        <Outlet></Outlet>
                        
                    </Col>
                </Row>
           
        </div>
    );
};

export default Dashboard;