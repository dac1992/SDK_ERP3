import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginStart, loginSuccess, loginFailure } from '../../store/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // 获取来源页面，如果没有则默认为首页
  const from = location.state?.from || '/';

  const onFinish = async (values) => {
    try {
      setLoading(true);
      dispatch(loginStart());
      
      // 模拟登录API调用
      // 在实际应用中，这里应该调用真实的登录API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 模拟登录成功返回的数据
      const mockData = {
        user: {
          id: '1',
          name: values.username,
          department: '技术部',
        },
        token: 'mock-token',
      };

      dispatch(loginSuccess(mockData));
      message.success('登录成功');
      navigate(from);
    } catch (error) {
      dispatch(loginFailure(error.message));
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <div className="text-2xl font-bold text-center mb-8">企业管理系统</div>
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          initialValues={{
            username: 'admin',
            password: 'admin123',
          }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="用户名"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full"
              size="large"
            >
              登录
            </Button>
          </Form.Item>

          <div className="text-center">
            还没有账号？
            <Link to="/register">立即注册</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login; 