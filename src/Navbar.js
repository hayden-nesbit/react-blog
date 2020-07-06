import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse, NavbarBrand } from 'reactstrap';
import Pdf from './resume.pdf'
import './TopNav.css'

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
        let page = link === "Resume" ? Pdf : "#"

        return (
            <Nav>
                <NavItem >
                    <NavLink key={index} className={props.view === link ? "text-muted pl-3 mt-2" : "text-white pl-3 mt-2"}
                        onClick={() => props.updatePage(link)}
                        href={page}
                    >
                        <h6>{link}</h6>
                    </NavLink>
                </NavItem>
            </Nav>
         ) })


    return (
            <div className="bg-dark  p-2 border-bottom">
                <Navbar light expand="md">
                <NavbarBrand><h3 id="logo" className="mt-2 ml-1 text-white"><b>HN</b></h3></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav>
                            <NavItem>
                                {/* <NavLink className="text-dark mt-1"><h4>Hayden Nesbit</h4></NavLink> */}
                            </NavItem>
                        </Nav>
                        {navLinksinHTML}
                    </Collapse>
                </Navbar>
            </div>

        )
    }

export default TopNav;



