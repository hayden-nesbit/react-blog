// import React from "react"

// class Navbar extends React.Component {
//     constructor(props) {
//         super(props)
//         this.navbarLinks = [
//             "Blog",
//             "About",
//             "Resume"
//         ]
//     }

//     render() {
//         const navLinksinHTML = this.navbarLinks.map((link, index) => {
//             return (
//                 <React.Fragment key={index}>
//                     <a className="text-white pl-5 pt-5"
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
//                    <h6>{navLinksinHTML}</h6> 
//                 </div>
//             </div>
//         )
//     }
// }

// export default Navbar




import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

const TopNav = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


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
                    <Nav>
                        <NavItem>
                            <NavLink href=""><h5>About</h5></NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink href=""><h5>Blog</h5></NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink href=""><h5>Projects</h5></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    )
}

export default TopNav;



