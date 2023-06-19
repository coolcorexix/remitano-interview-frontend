import NotFoundPage from '../pages/404';
import HomePage from '../pages/home';
import LogInPage from '../pages/login';
import RegisterPage from '../pages/register';
import SharePage from '../pages/share';

import PrivateRoute from './guards/PrivateRoute';
import PublicRoute from './guards/PublicRoute';

export const routes = [
  {
    element: <PublicRoute />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/login',
        element: <LogInPage />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/share',
        element: <SharePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
