import { RouteRecordRaw } from 'vue-router';
import PagesRoutes from "./pages.routes"
const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "MainLayout" */ '../layouts/DefaultLayout'),
      redirect:{
          name: 'welcome'
      },
      children: [
          ...PagesRoutes
      ]
    },
  ]

export default routes;
  