import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, faCalendar, faClock, faWrench, faBook, 
  faGraduationCap, faCar, faSearch, faPlus, faUser,
  faArrowUp, faUsers, faCircleCheck, faCircleMinus
} from '@fortawesome/free-solid-svg-icons';
import ReactECharts from 'echarts-for-react';
import './styles/index.css';

function App() {
  const chartOption = {
    animation: false,
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
        lineStyle: {
          color: '#E5E7EB'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#E5E7EB'
        }
      }
    },
    series: [{
      data: [82, 93, 90, 93, 89, 73, 55],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#3B82F6'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(59,130,246,0.2)'
          }, {
            offset: 1,
            color: 'rgba(59,130,246,0)'
          }]
        }
      }
    }]
  };

  return (
    <div className="flex">
      <div className="sidebar">
        <div className="p-6 border-b border-gray-200">
          <div className="text-2xl font-bold text-primary">企业管理系统</div>
        </div>
        <div className="py-4">
          <div className="nav-item active">
            <FontAwesomeIcon icon={faHouse} className="icon mr-3" />
            <span>工作台</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faCalendar} className="icon mr-3" />
            <span>会议管理</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faClock} className="icon mr-3" />
            <span>考勤打卡</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faWrench} className="icon mr-3" />
            <span>工具库</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faBook} className="icon mr-3" />
            <span>标准库</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faGraduationCap} className="icon mr-3" />
            <span>知识库</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faCar} className="icon mr-3" />
            <span>车辆管理</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="flex justify-between items-center mb-6">
          <div className="search-input">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            <input type="text" placeholder="搜索..." />
          </div>
          
          <div className="flex items-center">
            <button className="bg-primary text-white px-4 py-2 rounded-button flex items-center mr-4">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              新建
            </button>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-gray-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="card">
            <div className="text-gray-500 mb-2">本周会议</div>
            <div className="text-3xl font-bold">24</div>
            <div className="text-secondary text-sm mt-2">
              <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
              较上周增长 12%
            </div>
          </div>
          <div className="card">
            <div className="text-gray-500 mb-2">打卡率</div>
            <div className="text-3xl font-bold">98.5%</div>
            <div className="text-secondary text-sm mt-2">
              <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
              较上月增长 2.1%
            </div>
          </div>
          <div className="card">
            <div className="text-gray-500 mb-2">文档数量</div>
            <div className="text-3xl font-bold">1,286</div>
            <div className="text-secondary text-sm mt-2">
              <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
              本月新增 126 份
            </div>
          </div>
          <div className="card">
            <div className="text-gray-500 mb-2">车辆使用率</div>
            <div className="text-3xl font-bold">76.8%</div>
            <div className="text-secondary text-sm mt-2">
              <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
              较上月增长 5.3%
            </div>
          </div>
        </div>

        <div className="card mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">进行中的会议</h2>
            <button className="text-primary">查看全部</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div>
                  <div className="font-medium">产品规划评审会议</div>
                  <div className="text-sm text-gray-500">主持人：张总监 | 3号会议室</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                10:00 - 11:30
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div>
                  <div className="font-medium">技术部周会</div>
                  <div className="text-sm text-gray-500">主持人：李经理 | 5号会议室</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                14:00 - 15:30
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">今日打卡记录</h2>
            <button className="bg-primary text-white px-4 py-2 rounded-button flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              立即打卡
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-gray-500 mb-2">上班打卡</div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-2" />
                <span className="text-lg font-medium">08:56</span>
                <span className="ml-2 text-sm text-gray-500">准时</span>
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-2">下班打卡</div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCircleMinus} className="text-gray-300 mr-2" />
                <span className="text-lg font-medium">待打卡</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-lg font-bold mb-6">存储空间使用情况</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>已使用 1775.06 MB</span>
                  <span className="text-gray-500">总容量 2 GB</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">文档</div>
                  <div className="text-lg font-medium mt-1">895 MB</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">图片</div>
                  <div className="text-lg font-medium mt-1">379 MB</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2 className="text-lg font-bold mb-6">车辆使用统计</h2>
            <ReactECharts option={chartOption} style={{ height: 300 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 