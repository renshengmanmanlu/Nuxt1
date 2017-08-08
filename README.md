# y

> y

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
## 项目结构描叙
```
├── assets                     // 资源目录 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript
├── components                 // 组件目录 用于组织应用的 Vue.js 组件。
│   └── loading                // 加载动画组建
├── layouts                    // 布局目录 该目录名为Nuxt.js保留的，不可更改。
├── middleware                 // 中间件目录
├── pages                      //页面目录
│   ├── loading                // 加载动画测试
│   └── route                  // 自定义路由
├── plugins                    //插件目录
├── static                     //静态文件目录
├── store                      //目录用于组织应用的 Vuex 状态树 文件。
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── nuxt.config.js             // nuxt.config.js 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。
└── package.json               // package.json
```

# package.json

```
# "lru-cache": "^4.1.1",提供组件缓存功能以获得更好的渲染性能。
$ npm install lru-cache --save
```

