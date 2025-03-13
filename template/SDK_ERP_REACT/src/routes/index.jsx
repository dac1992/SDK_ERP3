import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Meetings from '../pages/Meetings';
import MeetingDetail from '../pages/Meetings/Detail';
import Suppliers from '../pages/Meetings/Suppliers';
import Experts from '../pages/Meetings/Experts';
import Attendance from '../pages/Attendance';
import Tools from '../pages/Tools';
import Standards from '../pages/Standards';
import Knowledge from '../pages/Knowledge';
import Vehicles from '../pages/Vehicles';
import VehicleDetail from '../pages/Vehicles/Detail';
import Login from '../pages/Login';

const router = createBrowserRouter([
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
        children: [
          {
            index: true,
            element: <Meetings />,
          },
          {
            path: ':id',
            element: <MeetingDetail />,
          },
          {
            path: 'suppliers',
            element: <Suppliers />,
          },
          {
            path: 'experts',
            element: <Experts />,
          },
        ],
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
        children: [
          {
            index: true,
            element: <Vehicles />,
          },
          {
            path: ':id',
            element: <VehicleDetail />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router; 