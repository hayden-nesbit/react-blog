import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import Pdf from './resume.pdf'

function TopNav(props) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let navbarLinks = [
        "About",
        "Blog",
        "Resume",
        "Portfolio"
    ]
    const navLinksinHTML = navbarLinks.map((link, index) => {
        let page = link === "Resume" ? Pdf : link

        return (
            <Nav>
                <NavItem>
                    <NavLink key={index} className="text-dark pl-3"
                        onClick={() => props.updatePage(link)}
                        href={page}
                    >
                        <h6>{link}</h6>
                    </NavLink>
                </NavItem>
            </Nav>
         ) })


    return (
            <div className="bg-white p-2 border-bottom">
                <Navbar light expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav>
                            <NavItem>
                                <NavLink className="text-dark"><h4>Hayden Nesbit</h4></NavLink>
                            </NavItem>
                        </Nav>
                        {navLinksinHTML}
                    </Collapse>
                </Navbar>
            </div>

        )
    }

export default TopNav;



