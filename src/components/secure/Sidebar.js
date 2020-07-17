import React, { Component } from 'react';
import propTypes from 'prop-types';
import { NavLink } from "react-router-dom"

import Header from '../../components/secure/Header';
import logo from '../../assets/images/reactlogo.png';

class Sidebar extends Component {
  constructor(props) {
    super();
    this.state = {}
  }
  render(){
    // this.props.items && this.props.items.length >0 && this.props.items.map(item=>{
    //   console.log(item);
    //   return 0;
    // });
    console.log(this.props)
    let classN = this.props.className
    return (
      <div>
        {this.props.items && this.props.items.length >0 ? 
         <ul className="nav">
         { this.props.items.map((sidebarItem)=>{
            return <li>
              <NavLink to={sidebarItem.path}>
              <i className={sidebarItem.icon}  /><span className={this.props.className}>{sidebarItem.name}</span>
              </NavLink>
            </li>
          })}
         </ul>
         : "Notload sidebar"}
      </div>
    );
  }

}

Sidebar.propTypes = {
  items: propTypes.array
}
export default Sidebar;


// class Sidebar extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       width: window.innerWidth
//     };
//   }
//   activeRoute(routeName) {
//     return this.props.location && this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
//   }
//   updateDimensions() {
//     this.setState({ width: window.innerWidth });
//   }
//   componentDidMount() {
//     this.updateDimensions();
//     window.addEventListener("resize", this.updateDimensions.bind(this));
//   }
//   render() {
//     const sidebarBackground = {
//       backgroundImage: "url(" + this.props.image + ")"
//     };
//     return (
//       <div
//         id="sidebar"
//         className="sidebar"
//         data-color={this.props.color}
//         data-image={this.props.image}
//       >
//         <div className="logo">
//           <a
//             href="https://www.creative-tim.com?ref=lbd-sidebar"
//             className="simple-text logo-mini"
//           >
//             Creative Tim
//           </a>
//         </div>
//         <div className="sidebar-wrapper">
//           <ul className="nav">
//             {this.state.width <= 991 ? <Header /> : null}
//             {this.props.routes.map((prop, key) => {
//               if (!prop.redirect)
//                 return (
//                   <li
//                     className={
//                       prop.upgrade
//                         ? "active active-pro"
//                         : this.activeRoute(prop.layout + prop.path)
//                     }
//                     key={key}
//                   >
//                     <NavLink
//                       to={prop.layout + prop.path}
//                       className="nav-link"
//                       activeClassName="active"
//                     >
//                       <i className={prop.icon} />
//                       <p>{prop.name}</p>
//                     </NavLink>
//                   </li>
//                 );
//               return null;
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
 
// export default Sidebar;