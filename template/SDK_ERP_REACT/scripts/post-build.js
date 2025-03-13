const fs = require('fs');
const path = require('path');

// 定义目录路径
const buildDir = path.join(__dirname, '../build');
const targetHtmlDir = path.join(__dirname, '../html');
const targetCssDir = path.join(__dirname, '../css');
const targetJsDir = path.join(__dirname, '../js');

// 创建目标目录
[targetHtmlDir, targetCssDir, targetJsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 处理HTML文件
const htmlContent = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
const processedHtml = htmlContent
  .replace(/\/static\/css\//g, '{pboot:sitetplpath}/css/')
  .replace(/\/static\/js\//g, '{pboot:sitetplpath}/js/');
fs.writeFileSync(path.join(targetHtmlDir, 'index.html'), processedHtml);

// 复制CSS文件
const cssDir = path.join(buildDir, 'static/css');
if (fs.existsSync(cssDir)) {
  fs.readdirSync(cssDir).forEach(file => {
    if (file.endsWith('.css')) {
      fs.copyFileSync(
        path.join(cssDir, file),
        path.join(targetCssDir, file)
      );
    }
  });
}

// 复制JS文件
const jsDir = path.join(buildDir, 'static/js');
if (fs.existsSync(jsDir)) {
  fs.readdirSync(jsDir).forEach(file => {
    if (file.endsWith('.js')) {
      fs.copyFileSync(
        path.join(jsDir, file),
        path.join(targetJsDir, file)
      );
    }
  });
}

console.log('构建后处理完成！'); 