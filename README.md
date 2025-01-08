<h1 align="center">Node-Backend-TS</h1>
<p align="center">一个基于Express的Node后台基础框架TS版</p>

## 介绍
完成用Typescript编写Express后台的想法，有一些基础的相对规范的开发配置，减少从零开始的踩坑时间
会基于个人开发情况持续更新必要的配置，欢迎Issues

##  基础架构

├─app.ts 入口文件<br>
├─config<br>
├─└index.ts 全局配置文件<br>
├─util 工具模块<br>
├─└jwt.ts jwt部分方法的Promise封装<br>
├─router  用于配置URL路由<br>
├─model  数据的持久层MySQL<br>
├─middleware  #用于编写中间件<br>
├─└auth.ts 身份验证中间件<br>
├─└error-handler.ts 服务端全局错误处理<br>
├─.babelrc 配置允许ES6写法<br>
├─.gitignore <br>
├─package.json nodemon热更新及ts版本node启动<br>
└─tsconfig.json 关闭了严格模式<br>  


##  使用
  
1. 下载依赖 `npm install`
2. `npm run start`热更新启动
3. config全局配置中的JWT密钥、运行端口、数据库连接配置等后续修改即可
  
##  参与贡献
  
1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request
