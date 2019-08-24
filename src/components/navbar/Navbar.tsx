import * as React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input
  } from "reactstrap";

import routes from "../../routes";

import { StaticContext } from "react-router";

export interface NavbarAppProps {
}
 
const NavbarApp: React.SFC<any> = (props) => {
    const [state, setState] = React.useState({color: 'transparent'})

    const sidebarToggle = React.useRef<HTMLButtonElement>(null);

    const getBrand = () => {
        let brandName = "Default Brand";
        routes.map(prop => {
          if (window.location.href.indexOf(prop.path) !== -1) {
            brandName = prop.name;
          }
          return null;
        });
        return brandName;
    }

    const openSidebar = () => {
        console.log('eieieieieieieieieieie', props)
        document.documentElement.classList.toggle("nav-open");
        if (sidebarToggle && sidebarToggle.current) {
            sidebarToggle.current.classList.toggle("toggled");
        }
    }

    // React.useEffect(() => {
    //     function updateColor() {
    //         if (window.innerWidth < 993 && state.isOpen) {
    //           setState({
    //             ...state,
    //             color: "dark"
    //           });
    //         } else {
    //           setState({
    //             ...state,
    //             color: "transparent"
    //           });
    //         }
    //     }

    //     window.addEventListener("resize", updateColor);
    // }, [state])

    React.useEffect(() => {
        // console.log('eieieieieieieieieieie', props)
        if (
            window.innerWidth < 993 &&
            props.history.location.pathname !== props.location.pathname &&
            document.documentElement.className.indexOf("nav-open") !== -1
          ) {
            document.documentElement.classList.toggle("nav-open");
            
            if (sidebarToggle && sidebarToggle.current) {
                sidebarToggle.current.classList.toggle("toggled");
            }
        }

    }, [props.history, props.location])

    return (
        <Navbar
            color={
            props.location.pathname.indexOf("full-screen-maps") !== -1
                ? "dark"
                : state.color
            }
            expand="lg"
            className={
                props.location.pathname.indexOf("full-screen-maps") !== -1
                    ? "navbar-absolute fixed-top"
                    : "navbar-absolute fixed-top " +
                    (state.color === "transparent" ? "navbar-transparent " : "")
            }
        >
            <Container fluid>
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                    <button
                        type="button"
                        ref={sidebarToggle}
                        className="navbar-toggler"
                        onClick={() => openSidebar()}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                    </div>
                    <NavbarBrand href="/">{getBrand()}</NavbarBrand>
                </div>
            </Container>
        </Navbar>
    );
}
 
export default NavbarApp;