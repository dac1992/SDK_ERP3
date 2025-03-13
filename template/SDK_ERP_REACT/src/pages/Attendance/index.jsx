import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Modal, message } from 'antd';
import { ClockCircleOutlined, EnvironmentOutlined, UserOutlined, BankOutlined, LaptopOutlined } from '@ant-design/icons';
import moment from 'moment';
import { getDeviceInfo, getLocationInfo, getBrowserInfo } from '../../utils/deviceInfo';
import {
  checkInStart,
  checkInSuccess,
  checkInFailure,
  checkOutStart,
  checkOutSuccess,
  checkOutFailure,
} from '../../store/slices/attendanceSlice';

const Attendance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { todayRecords, loading } = useSelector((state) => state.attendance);
  const [modalVisible, setModalVisible] = useState(false);
  const [attendanceInfo, setAttendanceInfo] = useState(null);

  useEffect(() => {
    // 获取今日打卡记录
    // 这里应该调用API获取记录
  }, []);

  const handleCheckIn = async () => {
    try {
      if (!isAuthenticated) {
        message.info('请先登录');
        navigate('/login', { state: { from: '/attendance' } });
        return;
      }

      dispatch(checkInStart());

      // 获取设备和位置信息
      const deviceInfo = await getDeviceInfo();
      const locationInfo = await getLocationInfo();
      const browserInfo = getBrowserInfo();

      const attendanceData = {
        type: 'in',
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
        location: locationInfo,
        deviceInfo: {
          ...deviceInfo,
          browser: browserInfo,
        },
        user: {
          id: user.id,
          name: user.name,
          department: user.department,
        },
      };

      // 这里应该调用实际的打卡API
      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attendanceData),
      });

      if (!response.ok) {
        throw new Error('打卡失败');
      }

      const data = await response.json();
      dispatch(checkInSuccess(data));
      setAttendanceInfo(data);
      setModalVisible(true);
    } catch (error) {
      dispatch(checkInFailure(error.message));
      message.error(error.message);
    }
  };

  const handleCheckOut = async () => {
    try {
      if (!isAuthenticated) {
        message.info('请先登录');
        navigate('/login', { state: { from: '/attendance' } });
        return;
      }

      dispatch(checkOutStart());

      // 获取设备和位置信息
      const deviceInfo = await getDeviceInfo();
      const locationInfo = await getLocationInfo();
      const browserInfo = getBrowserInfo();

      const attendanceData = {
        type: 'out',
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
        location: locationInfo,
        deviceInfo: {
          ...deviceInfo,
          browser: browserInfo,
        },
        user: {
          id: user.id,
          name: user.name,
          department: user.department,
        },
      };

      // 这里应该调用实际的打卡API
      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attendanceData),
      });

      if (!response.ok) {
        throw new Error('打卡失败');
      }

      const data = await response.json();
      dispatch(checkOutSuccess(data));
      setAttendanceInfo(data);
      setModalVisible(true);
    } catch (error) {
      dispatch(checkOutFailure(error.message));
      message.error(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">考勤打卡</h1>
      <Card className="mb-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-gray-500 mb-2">上班打卡</div>
            {todayRecords.checkIn ? (
              <div className="flex items-center">
                <ClockCircleOutlined className="text-green-500 mr-2" />
                <span className="text-lg font-medium">
                  {moment(todayRecords.checkIn.timestamp).format('HH:mm')}
                </span>
                <span className="ml-2 text-sm text-gray-500">准时</span>
              </div>
            ) : (
              <Button
                type="primary"
                onClick={handleCheckIn}
                loading={loading}
              >
                上班打卡
              </Button>
            )}
          </div>
          <div>
            <div className="text-gray-500 mb-2">下班打卡</div>
            {todayRecords.checkOut ? (
              <div className="flex items-center">
                <ClockCircleOutlined className="text-green-500 mr-2" />
                <span className="text-lg font-medium">
                  {moment(todayRecords.checkOut.timestamp).format('HH:mm')}
                </span>
              </div>
            ) : (
              <Button
                type="primary"
                onClick={handleCheckOut}
                loading={loading}
                disabled={!todayRecords.checkIn}
              >
                下班打卡
              </Button>
            )}
          </div>
        </div>
      </Card>

      <Modal
        title="打卡成功"
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        width={600}
      >
        {attendanceInfo && (
          <div className="space-y-4">
            <div className="flex items-center">
              <ClockCircleOutlined className="text-primary mr-2" />
              <span className="font-medium">打卡时间：</span>
              <span>{moment(attendanceInfo.timestamp).format('YYYY-MM-DD HH:mm:ss')}</span>
            </div>
            <div className="flex items-center">
              <EnvironmentOutlined className="text-primary mr-2" />
              <span className="font-medium">打卡地点：</span>
              <span>
                {`经度 ${attendanceInfo.location.longitude.toFixed(6)}, 
                  纬度 ${attendanceInfo.location.latitude.toFixed(6)}`}
              </span>
            </div>
            <div className="flex items-center">
              <UserOutlined className="text-primary mr-2" />
              <span className="font-medium">打卡人员：</span>
              <span>{attendanceInfo.user.name}</span>
            </div>
            <div className="flex items-center">
              <BankOutlined className="text-primary mr-2" />
              <span className="font-medium">所属部门：</span>
              <span>{attendanceInfo.user.department}</span>
            </div>
            <div className="flex items-start">
              <LaptopOutlined className="text-primary mr-2 mt-1" />
              <div>
                <span className="font-medium">设备信息：</span>
                <div className="text-sm text-gray-500 mt-1">
                  <div>设备：{attendanceInfo.deviceInfo.platform}</div>
                  <div>浏览器：{`${attendanceInfo.deviceInfo.browser.name} ${attendanceInfo.deviceInfo.browser.version}`}</div>
                  <div>分辨率：{attendanceInfo.deviceInfo.screenResolution}</div>
                  {attendanceInfo.deviceInfo.battery && (
                    <div>
                      电池：{`${(attendanceInfo.deviceInfo.battery.level * 100).toFixed(0)}% ${
                        attendanceInfo.deviceInfo.battery.charging ? '(充电中)' : ''
                      }`}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Attendance; 