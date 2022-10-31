import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
Routes,
useParams,
} from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Goals from './pages/Goals';
import View from './pages/Goals';

class BootstrapNavbar extends React.Component{
    
    constructor(props) {
        super(props);
         this.state = {
            view: true,
        };
    }
        
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/goals">Set Goals</Nav.Link>
                                        <Nav.Link href="/views">View Goals</Nav.Link>
                                        <NavDropdown title="About Us" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Our Story</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Routes>
                                <Route exact path="/" element={<Home />}/>
                                <Route path="*" element={<NoPage />}/>
                                <Route path="contact" element={<Contact/>}/>
                                <Route path="goals" element={<Goals/>}/>
                                <Route path="views" element={<Goals/>}/> 
                            </Routes>
                        </Router>
                    </div>
                </div>
                
            </div>
        )  
    }
}

export default BootstrapNavbar;