### lesson 1
live-server  插件

配置：
"scripts": {
    "webpack": "webpack ./src/entry.js ./dist/bundle.js", //npm run webpack
    "live-server":"live-server ./ --port=9090" //npm run live-server
  },

运行 npm run webpack
再运行 npm run live-server

### lesson2
webpack多入口
webpack.config.js文件
'path'
node x.js

### lesson 3
webpack-dev-server 插件----自动打包运行（npm run webpack + npm run live-server）与热更新
配置：
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack": "webpack",
    "live-server": "live-server ./ --port=9090",
    "webpack-dev-server": "webpack-dev-server"
  }

npm run webpack-dev-server = npm run webpack + npm run live-server