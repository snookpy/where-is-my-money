import React, { useEffect } from 'react';
import { Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import PerfectScrollbar from "perfect-scrollbar";
import {IRoutes} from '../../routes';

export interface SideBarProps {
  location: any;
  routes: Array<IRoutes>;
}
let ps: any;

const SideBar: React.SFC<SideBarProps> = ({location, routes}) => {

    const sidebar = React.useRef<HTMLDivElement>(null);
    const activeRoute = (routeName: string) => {
      return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    useEffect(() => {
        
        if (navigator.platform.indexOf("Win") > -1) {
            if (sidebar && sidebar.current) {
                ps = new PerfectScrollbar(sidebar.current, {
                  suppressScrollX: true,
                  suppressScrollY: false
                });
            }
        }

         return () => {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
              }
         }
    });

    return (
      <div
        className="sidebar"
        data-color={'black'}
        data-active-color={'danger'}
      >
        <div className="logo">
          <a
            href="https://www.creative-tim.com"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a
            href="https://www.creative-tim.com"
            className="simple-text logo-normal"
          >
            Creative Tim
          </a>
        </div>
        <div className="sidebar-wrapper" ref={sidebar}>
          <Nav>
            {routes.map((prop, key) => {
              return (
                <li
                  className={
                    activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
}
 
export default SideBar;