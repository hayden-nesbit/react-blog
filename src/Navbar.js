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

const HomeNav = (props) => {
    console.log(props)

    const [isOpen, setIsOpen] = useState(false);

    const navbarLinks = [
        "Home",
        "Blog",
        "Projects"
    ]

    const navLinksinHTML = navbarLinks.map((link, index) => {
        return (
            <div key={index}>
                <NavLink className="text-light"
                    onClick={() => props.updatePage(link)}
                    href="#"

                >
                    {link}
                </NavLink>
            </div>
        )
    })

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {navLinksinHTML}
                    </Nav>
                </Collapse>
                <div class="d-inline p-1">
                    <a href="https://twitter.com/HaydenNesbit"><FontAwesomeIcon icon={faTwitter} size="md" /></a>
                </div>
                <div class="d-inline p-1">
                    <a href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/"><FontAwesomeIcon icon={faLinkedin} size="md" /></a>
                </div>
                <div class="d-inline p-1">
                    <a href="https://github.com/hayden-nesbit?tab=repositories"><FontAwesomeIcon icon={faGithub} size="md" /></a>
                </div>
            </Navbar>
        </div>

    );
}

export default HomeNav;
