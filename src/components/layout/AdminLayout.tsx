import * as React from 'react';
import SideBar from '../sidebar/Sidebar';
import routes from '../../routes';
import { Route, Switch } from "react-router-dom";
import { StaticContext, RouteComponentProps } from 'react-router';
import NavbarApp from '../navbar/Navbar';
import PerfectScrollbar from "perfect-scrollbar";

let ps: any;

const AdminLayout: React.SFC<RouteComponentProps<any, StaticContext, any>> = (props) => {

    const mainPanel = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            if (mainPanel && mainPanel.current) {
                ps = new PerfectScrollbar(mainPanel.current);
            }
            document.body.classList.toggle("perfect-scrollbar-on");
        }
        if (props.history.action === "PUSH") {
            if (mainPanel.current) {
                mainPanel.current.scrollTop = 0;
            }
            if (document.scrollingElement) {
                document.scrollingElement.scrollTop = 0;
            }
        }
      
      return () => {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
          }
      }
    })

    return (
        <div className="wrapper">
            <SideBar 
                location={props.location}
                routes={routes}
            />
            <div className="main-panel" ref={mainPanel}>
                <NavbarApp {...props} />
                <Switch>
                    {routes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.path}
                            component={prop.component}
                            key={key}
                        />
                    );
                    })}
                </Switch>
            </div>
        </div>
    );
}
 
export default AdminLayout;