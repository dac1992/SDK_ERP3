import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout as AntLayout, Menu, Button, Dropdown, Space } from 'antd';
import {
  HomeOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  ToolOutlined,
  BookOutlined,
  ReadOutlined,
  CarOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = AntLayout;

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

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

  const userMenuItems = [
    {
      key: 'profile',
      label: '个人中心',
    },
    {
      key: 'settings',
      label: '设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: '退出登录',
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  const handleUserMenuClick = ({ key }) => {
    switch (key) {
      case 'profile':
        navigate('/profile');
        break;
      case 'settings':
        navigate('/settings');
        break;
      case 'logout':
        // 这里应该调用登出action
        navigate('/');
        break;
      default:
        break;
    }
  };

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
        <Header className="bg-white px-6 flex items-center justify-end">
          {isAuthenticated ? (
            <Dropdown
              menu={{
                items: userMenuItems,
                onClick: handleUserMenuClick,
              }}
              trigger={['click']}
            >
              <Space className="cursor-pointer">
                <UserOutlined />
                <span>{user?.name}</span>
                <DownOutlined />
              </Space>
            </Dropdown>
          ) : (
            <Button type="link" onClick={() => navigate('/login')}>
              注册/登录
            </Button>
          )}
        </Header>
        <Content className="p-6">
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout; 