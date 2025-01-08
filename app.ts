import express from 'express'; //express框架
import morgan from 'morgan'; //HTTP 请求日志中间件
import cors from 'cors'; //跨域中间件
import user from './router/user'; //路由模块
import errorHandler from './middleware/error-handler'; //统一处理服务端错误处理中间件
import { devServerPort } from './config'; //端口号配置

const port = process.env.port || devServerPort;

const app = express();
app
  .use(morgan('dev'))
  .use(express.json())
  .use(cors())
  .use('/user', user)
  .use(errorHandler())
  .listen(port, () => {
    console.log(`监听端口${port}`);
  });
