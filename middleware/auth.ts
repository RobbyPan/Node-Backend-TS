import { verify } from '../util/jwt';
import { jwtSecret } from '../config/';
import { databaseQueryHandler } from '../model';

/**
 * 身份验证中间件
 */
export default async (req: any, res: any, next: any) => {
  let token = req.headers.authorization;
  token = token ? token.split('Bearer ')[1] : null;
  if (!token) {
    return res
      .status(401)
      .json({
        message: 'Invalid token',
      })
      .end();
  }
  try {
    const decodedToken: any = await verify(token, jwtSecret);
    const sql = 'SELECT * FROM u_user WHERE user_id = ? ';
    const sqlParams = decodedToken.userId;
    try {
      const result: any = await databaseQueryHandler(sql, sqlParams);
      // req.user = { userId: result[0].userId, userName: result[0].userName, userType: result[0].userType };
      req.user = result[0];
      next();
    } catch (error) {
      return res
        .status(401)
        .json({
          message: 'Invalid token',
        })
        .end();
    }
  } catch (error) {
    return res
      .status(401)
      .json({
        message: 'Invalid token',
      })
      .end();
  }
};
