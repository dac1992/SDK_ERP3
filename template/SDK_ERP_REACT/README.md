# SDK ERP React 模板

这是一个基于React的企业管理系统模板，使用现代化的技术栈构建。

## 技术栈

- React 18
- Tailwind CSS
- Font Awesome
- ECharts

## 开发环境设置

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 构建生产版本：
```bash
npm run build
```

## 目录结构

```
template/SDK_ERP_REACT/
├── src/                # React源代码
│   ├── styles/        # CSS样式文件
│   ├── App.jsx        # 主应用组件
│   └── index.jsx      # 应用入口
├── html/              # 构建后的HTML文件
├── css/               # 构建后的CSS文件
├── js/               # 构建后的JavaScript文件
└── scripts/          # 构建脚本
```

## 构建说明

项目使用特殊的构建流程，以适配PbootCMS的模板系统：

1. 执行`npm run build`会先构建React应用
2. 构建后会自动运行post-build脚本
3. post-build脚本会：
   - 处理资源路径，替换为PbootCMS的模板变量
   - 将构建后的文件分类存放到相应目录

## 注意事项

- 所有静态资源引用都会被自动转换为使用`{pboot:sitetplpath}`变量
- 构建后的文件会自动分类到html、css、js目录中
- 开发时请使用`npm start`命令，这样可以使用热重载等开发特性 