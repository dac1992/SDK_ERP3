import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Meetings from '../pages/Meetings';
import Attendance from '../pages/Attendance';
import Tools from '../pages/Tools';
import Standards from '../pages/Standards';
import Knowledge from '../pages/Knowledge';
import Vehicles from '../pages/Vehicles';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'meetings',
        element: <Meetings />,
      },
      {
        path: 'attendance',
        element: <Attendance />,
      },
      {
        path: 'tools',
        element: <Tools />,
      },
      {
        path: 'standards',
        element: <Standards />,
      },
      {
        path: 'knowledge',
        element: <Knowledge />,
      },
      {
        path: 'vehicles',
        element: <Vehicles />,
      },
    ],
  },
]);

export default router; 