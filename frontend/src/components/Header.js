import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import {ReactComponent as Logo} from '../images/logo.svg';
const navbarStyle = {
    backgroundColor: 'lightblue'
}
const Header = ({title}) => {
    return(
        
        <Navbar style = {navbarStyle} variant="Light">
            <Container>
                <Logo style = {{maxWidth:'100rem', maxHeight:'10rem'}}/>
            </Container>
        </Navbar>
    )
};

export default Header;
