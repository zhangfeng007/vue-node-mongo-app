
## Build Setup

``` bash
# 安装依赖
npm install

# 运行项目
npm run dev

# 打包项目
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 安装Vant组件库

``` bash
 npm i vant -S 
　　

## 安装按需引入插件babel-plugin-import
npm i babel-plugin-import -D 

## 在babelrc中配置：　
"plugins": [
    "transform-vue-jsx", 
    "transform-runtime",
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ],
## npm run dev重启项目。

//在main.js中按需加载你需要的组件：　

import {   popup,   Button} from 'vant';
//　使用组件：

Vue.use(popup).use(Button);

//页面中就可以这样使用了。

<van-button type="primary" @click="showPopup">
  展示弹出层
</van-button>

<van-popup
  v-model="show"
  round
  position="bottom"
  :style="{ height: '20%' }"
/>

```

# rem适配

``` bash
## 安装lib-flexible

> 安装lib-flexible（它的作用是检测页面是否已有meta[name="viewport"]，如果有，将根据已有的meta标签来设置缩放比例，否则会自动在html的head中添加一个meta name="viewport"的标签，同时会自动设置html的font-size为屏幕宽度除以10，也就是1rem等于html根节点的font-size）。

npm i lib-flexible --save 

## 在main.js中引入lib-flexible

import 'lib-flexible/flexible' 

## 配置px2rem-loader

npm install px2rem-loader -S

// 在build文件中找到util.js，将px2rem-loader添加到cssLoaders中，如:
const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
      remUnit: 37.5 // 这里设置html根字体，通常设置为设计稿宽度的 1/10。vant-UI的官方根字体大小是37.5
    }
  }
//同时，在generateLoaders方法中添加px2remLoader
function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]
}

```