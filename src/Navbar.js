// import React from "react"

// class Navbar extends React.Component {
//     constructor(props) {
//         super(props)
//         this.navbarLinks = [
//             "About",
//             "Blog",
//             "Projects"
//         ]
//     }

//     render() {
//         const navLinksinHTML = this.navbarLinks.map((link, index) => {
//             return (
//                 <React.Fragment key={index}>
//                     <a className="text-white pl-5"
//                         onClick={() => this.props.updatePage(link)}
//                         href="#"

//                     >
//                         {link}
//                     </a>
//                 </React.Fragment>
//             )
//         })
//         return (
//             <div className="bg-dark p-3">
//                 <div className="d-inline-flex">
//                 <h3 className="text-white">Hayden Nesbit</h3>
//                    <h6 className="pt-2">{navLinksinHTML}</h6> 
//                 </div>
//             </div>
//         )
//     }
// }

// export default Navbar




import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

function TopNav(props) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let navbarLinks = [
        "About",
        "Blog",
        "Projects"
    ]
    const navLinksinHTML = navbarLinks.map((link, index) => {
        return (
            <Nav>
                <NavItem>
                    <NavLink key={index} className="text-white pl-3"
                        onClick={() => props.updatePage(link)}
                        href="#"
                    >
                        <h6>{link}</h6>
                    </NavLink>
                </NavItem>
            </Nav>
         ) })


    return (
            <div className="bg-dark p-3">
                <Navbar light expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav>
                            <NavItem>
                                <NavLink className="text-white"><h4>Hayden Nesbit</h4></NavLink>
                            </NavItem>
                        </Nav>
                        {navLinksinHTML}
                    </Collapse>
                </Navbar>
            </div>

        )
    }

export default TopNav;



