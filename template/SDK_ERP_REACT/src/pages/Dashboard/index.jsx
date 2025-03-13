import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { TeamOutlined, CalendarOutlined, FileTextOutlined, CarOutlined } from '@ant-design/icons';

const Dashboard = () => {
  const stats = [
    {
      title: '本周会议',
      value: '24',
      trend: '较上周增长 12%',
      trendUp: true,
    },
    {
      title: '打卡率',
      value: '98.5%',
      trend: '较上月增长 2.1%',
      trendUp: true,
    },
    {
      title: '文档数量',
      value: '1,286',
      trend: '本月新增 126 份',
      trendUp: true,
    },
    {
      title: '车辆使用率',
      value: '76.8%',
      trend: '较上月增长 5.3%',
      trendUp: true,
    },
  ];

  const meetings = [
    {
      title: '产品规划评审会议',
      host: '张总监',
      room: '3号会议室',
      time: '10:00 - 11:30',
    },
    {
      title: '技术部周会',
      host: '李经理',
      room: '5号会议室',
      time: '14:00 - 15:30',
    },
  ];

  return (
    <div className="space-y-6">
      <Row gutter={24}>
        {stats.map((stat, index) => (
          <Col span={6} key={index}>
            <Card className="h-full">
              <div className="text-lg font-bold mb-4">{stat.title}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className={`text-sm ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trend}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Card
        title={
          <div className="flex items-center text-xl font-bold">
            <CalendarOutlined className="mr-2 text-xl" />
            进行中的会议
          </div>
        }
        extra={
          <Button type="link" className="text-base">
            查看全部
          </Button>
        }
      >
        <div className="space-y-6">
          {meetings.map((meeting, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
              <TeamOutlined className="text-2xl mr-4" />
              <div className="flex-1">
                <div className="text-lg font-bold mb-2">{meeting.title}</div>
                <div className="text-gray-500">
                  主持人：{meeting.host} | {meeting.room}
                </div>
              </div>
              <div className="text-gray-500 text-base">{meeting.time}</div>
            </div>
          ))}
        </div>
      </Card>

      <Row gutter={24}>
        <Col span={12}>
          <Card
            title={
              <div className="flex items-center text-xl font-bold">
                <FileTextOutlined className="mr-2 text-xl" />
                存储空间使用情况
              </div>
            }
          >
            <div className="space-y-4">
              <div className="text-lg">已使用 1775.06 MB</div>
              <div className="bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 rounded-full h-4"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="text-base font-medium">文档</div>
                  <div className="text-lg">895 MB</div>
                </div>
                <div>
                  <div className="text-base font-medium">图片</div>
                  <div className="text-lg">379 MB</div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={
              <div className="flex items-center text-xl font-bold">
                <CarOutlined className="mr-2 text-xl" />
                车辆使用统计
              </div>
            }
          >
            <div className="h-[200px] flex items-center justify-center text-xl text-gray-500">
              图表区域
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard; 