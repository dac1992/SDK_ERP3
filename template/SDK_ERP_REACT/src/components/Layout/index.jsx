import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout as AntLayout, Menu } from 'antd';
import {
  HomeOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  ToolOutlined,
  BookOutlined,
  ReadOutlined,
  CarOutlined,
} from '@ant-design/icons';

const { Sider, Content } = AntLayout;

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  // 如果未登录且不在登录页面，重定向到登录页
  React.useEffect(() => {
    if (!isAuthenticated && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [isAuthenticated, location.pathname, navigate]);

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '工作台',
    },
    {
      key: '/meetings',
      icon: <CalendarOutlined />,
      label: '会议管理',
    },
    {
      key: '/attendance',
      icon: <ClockCircleOutlined />,
      label: '考勤打卡',
    },
    {
      key: '/tools',
      icon: <ToolOutlined />,
      label: '工具库',
    },
    {
      key: '/standards',
      icon: <BookOutlined />,
      label: '标准库',
    },
    {
      key: '/knowledge',
      icon: <ReadOutlined />,
      label: '知识库',
    },
    {
      key: '/vehicles',
      icon: <CarOutlined />,
      label: '车辆管理',
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  if (!isAuthenticated && location.pathname === '/login') {
    return <Outlet />;
  }

  return (
    <AntLayout className="min-h-screen">
      <Sider width={280} theme="light" className="fixed h-screen">
        <div className="p-6 border-b border-gray-200">
          <div className="text-2xl font-bold text-primary">企业管理系统</div>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          className="border-none"
        />
      </Sider>
      <AntLayout className="ml-[280px]">
        <Content className="p-6">
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout; 