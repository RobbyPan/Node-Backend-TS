import mysql from 'mysql';
import { dbConfig } from '../config';
import { promisify } from 'util';

//数据库连接池
const pool = mysql.createPool(dbConfig);
const poolConnect = promisify(pool.getConnection);

/**
 * 数据库查询
 * @param sql sql语句
 * @param sqlParams sql参数
 * @returns 数据库查询结果
 */
export const databaseQueryHandler = (sql: string | mysql.QueryOptions, sqlParams?: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const connect = await poolConnect();
      const query: (sql: string | mysql.QueryOptions, sqlParams?: any) => Promise<any> = promisify(connect.query);
      try {
        const res = await query(sql, sqlParams);
        resolve(res);
        connect.release();
      } catch (error) {
        connect.release();
        reject(error);
        console.log('数据库操作错误:', error);
      }
    } catch (error) {
      console.log('数据库连接错误:', error);
      reject(error);
    }
  });
};
