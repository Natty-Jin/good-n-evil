
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const AllPresidents = lazy(() => import('../pages/all-presidents/page'));
const WarHistory = lazy(() => import('../pages/war-history/page'));
const KoreanHistory = lazy(() => import('../pages/korean-history/page'));
const Veterans = lazy(() => import('../pages/veterans/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/all-presidents',
    element: <AllPresidents />
  },
  {
    path: '/war-history',
    element: <WarHistory />
  },
  {
    path: '/korean-history',
    element: <KoreanHistory />
  },
  {
    path: '/veterans',
    element: <Veterans />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
