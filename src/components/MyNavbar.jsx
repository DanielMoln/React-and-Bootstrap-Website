import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {v4} from 'uuid'

class MyNavbar extends Component {
    state = { 
        menus: []
    } 
    
     constructor(props) {
        super(props);
        this.state.menus = this.props.menus
     }
     
    render() { 
        return (<div className='row m-4'>
            <div className='col'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">DOLGOZAT</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                this.state.menus.map(menu => {
                                    return <Link style={{color: 'gray', margin: '0 5px'}} key={v4()} to={menu.url}>{menu.name}</Link>
                                })
                            }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>);
    }
}
 
export default MyNavbar;