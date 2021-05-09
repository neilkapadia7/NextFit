import React from 'react'
import {Navbar, Nav, Container, NavDropdown, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../actions/authActions'
import querystring from 'querystring';
import './bootstrap.min.css'

const Header = () => {
    const redirectURL = 'http://localhost:3000/redirect';
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const options = {
        redirect_uri: redirectURL,
        client_id: process.env.REACT_APP_GOOGLE_CLIENT,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/fitness.activity.read',
        'https://www.googleapis.com/auth/fitness.activity.write',
        'https://www.googleapis.com/auth/fitness.blood_pressure.read',
        'https://www.googleapis.com/auth/fitness.heart_rate.read'
        ].join(" ")
    };

    const dispatch = useDispatch()

    const user = useSelector(state => state.user);
    const {userInfo} = user;

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar  bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>NextFit</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>  
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                        <NavItem>
                            <a href={`${rootUrl}?${querystring.stringify(options)}`} className='nav-link'>
                                Sign In / Register             
                            </a>
                        </NavItem>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
