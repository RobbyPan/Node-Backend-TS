import { PoolConfig } from 'mysql';

/**
 * JWT密钥
 */
export const jwtSecret = 'miaopasia';

/**
 * 开发环境的端口
 */
export const devServerPort = 3080;

/**
 * 数据库配置
 */
export const dbConfig: PoolConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'graduationdesign',
};
