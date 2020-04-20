// import React, { useState } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     Nav,
//     NavLink
// } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// const HomeNav = (props) => {
//     console.log(props)

//     const [isOpen, setIsOpen] = useState(false);

//     const navbarLinks = [
//         "Home",
//         "Blog",
//         "Projects"
//     ]

//     const navLinksinHTML = navbarLinks.map((link, index) => {
//         return (
//             <div key={index}>
//                 <NavLink className="text-light"
//                     onClick={() => props.updatePage(link)}
//                     href="#"

//                 >
//                     {link}
//                 </NavLink>
//             </div>
//         )
//     })

//     const toggle = () => setIsOpen(!isOpen);

//     return (
//         <div>
//             <Navbar color="dark" light expand="md">
//                 <NavbarToggler onClick={toggle} />
//                 <Collapse isOpen={isOpen} navbar>
//                     <Nav className="mr-auto" navbar>
//                         {/* {navLinksinHTML} */}
//                     </Nav>
//                 </Collapse>
//                 <div className="d-inline p-1">
//                     <a className="pr-3" href="https://twitter.com/HaydenNesbit"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
//                 </div>
//                 <div className="d-inline p-1">
//                     <a className="pr-3" href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
//                 </div>
//                 <div className="d-inline p-1">
//                     <a href="https://github.com/hayden-nesbit?tab=repositories"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
//                 </div>
//             </Navbar>
//         </div>

//     );
// }

// export default HomeNav;

import React, { useState } from 'react';
import projectCards from './projects.json'
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

const HomeNav = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const projCard = projectCards.map((card, index) => {


        return (
            <NavLink href={card.link} target="_blank">{card.title}</NavLink>
        )
    });

    return (
        <div className="bg-light mt-5">
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


export default HomeNav;


