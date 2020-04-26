import React, { useState } from 'react';
import projectCards from './projects.json'
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

const ProjNav = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const projCard = projectCards.map((card, index) => {


        return (
            <NavLink href={card.link} target="_blank">{card.title}</NavLink>
        )
    });

    return (
        <div className="bg-light mt-4">
            <Navbar light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav vertical>
                        <h3>Projects</h3>
                        {projCard}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    )
}


export default ProjNav;



