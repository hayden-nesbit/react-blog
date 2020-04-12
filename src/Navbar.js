import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const HomeNav = (props) => {

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
            </Navbar>
        </div>
    );
}

export default HomeNav;
