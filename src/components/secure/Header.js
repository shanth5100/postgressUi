import React, { Component } from 'react';
import '../../css/styles.css';
import { NavItem, Nav, NavDropdown } from "react-bootstrap";
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="header">
        <a href="#default" class="logo">CompanyLogo</a>
        <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="#about">About</a>
    <a href="#about">About</a><a href="#about">About</a><a href="#about">About</a>
  </div>
       
        </div>);
    }
// render() {
//     const notification = (
//       <div>
//         <i className="fa fa-globe" />
//         <b className="caret" />
//         <span className="notification">5</span>
//         <p className="hidden-lg hidden-md">Notification</p>
//       </div>
//     );
//     return (
//       <div>
//         <Nav>
//           <NavItem eventKey={1} href="#">
//             <i className="fa fa-dashboard" />
//             <p className="hidden-lg hidden-md">Dashboard</p>
//           </NavItem>
//           <NavDropdown
//             eventKey={2}
//             title={notification}
//             noCaret
//             id="basic-nav-dropdown"
//           >
//             <DropdownItem eventKey={2.1}>Notification 1</DropdownItem>
//             <DropdownItem eventKey={2.2}>Notification 2</DropdownItem>
//             <DropdownItem eventKey={2.3}>Notification 3</DropdownItem>
//             <DropdownItem eventKey={2.4}>Notification 4</DropdownItem>
//             <DropdownItem eventKey={2.5}>Another notifications</DropdownItem>
//           </NavDropdown>
//           <NavItem eventKey={3} href="#">
//             <i className="fa fa-search" />
//             <p className="hidden-lg hidden-md">Search</p>
//           </NavItem>
//         </Nav>
//         <Nav pullRight>
//           <NavItem eventKey={1} href="#">
//             Account
//           </NavItem>
//           <NavDropdown
//             eventKey={2}
//             title="Dropdown"
//             id="basic-nav-dropdown-right"
//           >
//           <DropdownMenu>
          
//             <DropdownItem eventKey={2.1}>Action</DropdownItem>
//             <DropdownItem eventKey={2.2}>Another action</DropdownItem>
//             <DropdownItem eventKey={2.3}>Something</DropdownItem>
//             <DropdownItem eventKey={2.4}>Another action</DropdownItem>
//             <DropdownItem eventKey={2.5}>Something</DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem eventKey={2.5}>Separated link</DropdownItem>
//             <DropdownItem></DropdownItem>
//           </DropdownMenu>
//           </NavDropdown>
//           <NavItem eventKey={3} href="#">
//             Log out
//           </NavItem>
//         </Nav>
//       </div>
//     );
//   }
}
 
export default Header;