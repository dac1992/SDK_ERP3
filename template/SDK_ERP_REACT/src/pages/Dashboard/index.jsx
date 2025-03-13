import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import {
  TeamOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CarOutlined,
} from '@ant-design/icons';

const Dashboard = () => {
  // 这里可以添加获取统计数据的逻辑
  const stats = {
    totalMeetings: 12,
    upcomingMeetings: 3,
    attendanceRate: 98.5,
    vehiclesInUse: 8,
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">工作台</h1>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="会议总数"
              value={stats.totalMeetings}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="待开会议"
              value={stats.upcomingMeetings}
              prefix={<CalendarOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="考勤率"
              value={stats.attendanceRate}
              precision={1}
              suffix="%"
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="车辆使用"
              value={stats.vehiclesInUse}
              prefix={<CarOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <div className="mt-6">
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <Card title="最近会议" className="h-[400px]">
              {/* 这里可以添加会议列表组件 */}
              <p className="text-gray-500">暂无最近会议</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="今日考勤" className="h-[400px]">
              {/* 这里可以添加考勤记录组件 */}
              <p className="text-gray-500">暂无考勤记录</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard; 