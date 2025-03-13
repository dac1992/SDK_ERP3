const fs = require('fs');
const path = require('path');

// 创建目录函数
function createDirectoryIfNotExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 处理HTML文件
function processHtmlFile(htmlContent) {
  // 替换所有资源路径
  let processedContent = htmlContent
    // 替换JS和CSS文件的路径
    .replace(/src="[^"]*\/static\/js\//g, 'src="{pboot:sitetplpath}/js/')
    .replace(/href="[^"]*\/static\/css\//g, 'href="{pboot:sitetplpath}/css/')
    // 替换其他图片资源的路径
    .replace(/src="[^"]*\/static\/media\//g, 'src="{pboot:sitetplpath}/images/')
    // 替换所有静态资源的路径
    .replace(/href="[^"]*\/(favicon\.ico|logo192\.png|manifest\.json|logo\d*\.png)"/g, 'href="{pboot:sitetplpath}/images/$1"')
    .replace(/src="[^"]*\/(favicon\.ico|logo192\.png|manifest\.json|logo\d*\.png)"/g, 'src="{pboot:sitetplpath}/images/$1"')
    // 替换任何剩余的以/开头的资源路径
    .replace(/href="\//g, 'href="{pboot:sitetplpath}/')
    .replace(/src="\//g, 'src="{pboot:sitetplpath}/');

  return processedContent;
}

// 主函数
function main() {
  const buildDir = path.resolve(__dirname, '../build');
  const htmlDir = path.resolve(__dirname, '../html');
  const cssDir = path.resolve(__dirname, '../css');
  const jsDir = path.resolve(__dirname, '../js');
  const imagesDir = path.resolve(__dirname, '../images');

  // 创建目标目录
  createDirectoryIfNotExists(htmlDir);
  createDirectoryIfNotExists(cssDir);
  createDirectoryIfNotExists(jsDir);
  createDirectoryIfNotExists(imagesDir);

  // 读取并处理index.html
  const htmlContent = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
  const processedHtml = processHtmlFile(htmlContent);
  fs.writeFileSync(path.join(htmlDir, 'index.html'), processedHtml);

  // 复制CSS文件
  const cssFiles = fs.readdirSync(path.join(buildDir, 'static/css'));
  cssFiles.forEach(file => {
    fs.copyFileSync(
      path.join(buildDir, 'static/css', file),
      path.join(cssDir, file)
    );
  });

  // 复制JS文件
  const jsFiles = fs.readdirSync(path.join(buildDir, 'static/js'));
  jsFiles.forEach(file => {
    fs.copyFileSync(
      path.join(buildDir, 'static/js', file),
      path.join(jsDir, file)
    );
  });

  // 复制静态资源到images目录
  ['favicon.ico', 'logo192.png', 'manifest.json', 'logo512.png'].forEach(file => {
    if (fs.existsSync(path.join(buildDir, file))) {
      fs.copyFileSync(
        path.join(buildDir, file),
        path.join(imagesDir, file)
      );
    }
  });

  // 复制media文件夹中的图片到images目录
  if (fs.existsSync(path.join(buildDir, 'static/media'))) {
    const mediaFiles = fs.readdirSync(path.join(buildDir, 'static/media'));
    mediaFiles.forEach(file => {
      fs.copyFileSync(
        path.join(buildDir, 'static/media', file),
        path.join(imagesDir, file)
      );
    });
  }

  console.log('Build files have been distributed to their respective directories.');
}

main(); 