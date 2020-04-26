import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './TopNav.css'

const HomeNav = (props) => {

    // Navbar.propTypes = {
    //     light: PropTypes.bool,
    //     dark: PropTypes.bool,
    //     fixed: PropTypes.string,
    //     color: PropTypes.string,
    //     role: PropTypes.string,
    //     expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    //     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    //   }
   

    return (
        <div className="float-right mt-5">
            <Navbar fixed="" color="dark" light expand="md">
                <Nav vertical >
                    <div className="d-inline p-1">
                    <a href="https://github.com/hayden-nesbit?tab=repositories"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                    <div className="d-inline p-1">
                        <a className="" href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    </div>
                    <div className="d-inline p-1">
                        <a className="" href="https://twitter.com/HaydenNesbit"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    </div>
                </Nav>
            </Navbar>
        </div>

    );
}

export default HomeNav;