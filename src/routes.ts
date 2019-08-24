
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export interface IRoutes {
  path: string;
  name: string;
  icon: string;
  component: any;
  pro?: boolean;
}
const routes: Array<IRoutes> = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-bank",
      component: Dashboard
    },
    {
      path: "/icons",
      name: "Icons",
      icon: "nc-icon nc-diamond",
      component: Profile
    },
    {
      path: "/maps",
      name: "Maps",
      icon: "nc-icon nc-pin-3",
      component: Dashboard
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: "nc-icon nc-bell-55",
      component: Profile
    },
    {
      path: "/user-page",
      name: "User Profile",
      icon: "nc-icon nc-single-02",
      component: Dashboard
    },
    {
      path: "/tables",
      name: "Table List",
      icon: "nc-icon nc-tile-56",
      component: Profile
    },
    {
      path: "/typography",
      name: "Typography",
      icon: "nc-icon nc-caps-small",
      component: Dashboard
    },
    {
      pro: true,
      path: "/upgrade",
      name: "Upgrade to PRO",
      icon: "nc-icon nc-spaceship",
      component: Profile
    }
  ];

  export default routes;
  