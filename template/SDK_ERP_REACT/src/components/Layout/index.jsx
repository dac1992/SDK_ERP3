import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout as AntLayout, Menu, Button, Dropdown, Space, Input } from 'antd';
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
  SearchOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = AntLayout;
const { Search } = Input;

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
      <Sider width={240} theme="light" className="fixed h-screen shadow-sm">
        <div className="p-6">
          <div className="text-2xl font-bold text-primary">企业管理系统</div>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          className="border-none text-lg"
          style={{
            fontSize: '17px',
          }}
        />
      </Sider>
      <AntLayout className="ml-[240px]">
        <Header className="bg-white px-8 py-4 flex items-center justify-between shadow-sm" style={{ height: '80px', lineHeight: 'normal' }}>
          <div className="flex-1 max-w-xl my-2">
            <Search
              placeholder="搜索..."
              allowClear
              size="large"
              className="header-search"
              style={{ width: '100%' }}
            />
          </div>
          <div className="flex items-center gap-4">
            <Button 
              type="primary" 
              icon={<PlusOutlined />} 
              size="large" 
              className="flex items-center text-base h-[42px]"
            >
              新建
            </Button>
            {isAuthenticated ? (
              <Dropdown
                menu={{
                  items: userMenuItems,
                  onClick: handleUserMenuClick,
                }}
                trigger={['click']}
              >
                <Space className="cursor-pointer text-base h-[42px]">
                  <UserOutlined style={{ fontSize: '18px' }} />
                  <span className="font-medium">{user?.name}</span>
                  <DownOutlined />
                </Space>
              </Dropdown>
            ) : (
              <Button 
                type="link" 
                onClick={() => navigate('/login')} 
                size="large" 
                className="text-base h-[42px]"
              >
                注册/登录
              </Button>
            )}
          </div>
        </Header>
        <Content className="p-8 bg-[#f5f5f5]">
          <Outlet />
        </Content>
      </AntLayout>
      <style jsx global>{`
        .ant-menu-item {
          height: 56px !important;
          line-height: 56px !important;
          font-weight: 600 !important;
        }
        .ant-menu-item .anticon {
          font-size: 20px !important;
          font-weight: bold !important;
        }
        .ant-menu-item-selected {
          font-weight: 700 !important;
        }
        .ant-menu-item .ant-menu-item-icon {
          stroke-width: 3 !important;
          stroke: currentColor !important;
        }
        .header-search .ant-input-affix-wrapper {
          height: 42px !important;
          padding: 4px 16px !important;
        }
        .header-search .ant-input-search-button {
          height: 42px !important;
        }
        .header-search .ant-input {
          font-size: 16px !important;
        }
        .header-search .ant-input-prefix {
          font-size: 18px !important;
        }
        .ant-layout-header {
          padding: 16px 32px !important;
        }
      `}</style>
    </AntLayout>
  );
};

export default Layout; 