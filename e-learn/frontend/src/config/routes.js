// Layout
import Layout from "../layouts/Layout";
// Admin Pages
import AdminHome from "../pages/Admin/Admin";
import AdmLogin from "../pages/Admin/Login";
//User Pages
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = [
  {
    path: "/admin",
    component: Layout,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        //exact: true,
      },
      {
        path: "/admin/login",
        component: AdmLogin,
        //exact: true,
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        //exact: true,
      },
      {
        path: "/login",
        component: Login,
        //exact: true,
      },
    ],
  },
];

export default routes;
