import jwt from 'jsonwebtoken';
// nodeCallback -> promise
import { promisify } from 'util';

/**
 *同步签署给定的有效载荷到JSON Web令牌字符串
 *@param payload -要签名的有效载荷，可以是文字、缓冲区或字符串
 *@param secretOrPrivateKey - HMAC算法的秘密，或RSA和ECDSA的PEM编码私钥。
 *@param [options] -签名的选项
 *@returns- JSON Web令牌字符串
 */
export const sign: (payload: any, secretOrPrivateKey: any, options?: any) => Promise<any> = promisify(jwt.sign);
/**
 *使用密钥或公钥同步验证给定的令牌以获得解码的令牌
 *@param token -要验证的JWT字符串
 *@param secretOrPublicKey - HMAC算法的秘密，或RSA和ECDSA的PEM编码的公钥。
 *@param [options] -验证选项
 *@returns-解码的令牌。
 */
export const verify: (token: string, secretOrPublicKey: string, options?: any) => Promise<any> = promisify(jwt.verify);
/**
 *返回解码后的有效载荷，而不验证签名是否有效。
 *@param token -要解码的JWT字符串
 *@param [options] -解码选项
 *@returns-解码的Token
 */
export const decode: (token: string, options?: any) => Promise<any> = promisify(jwt.decode);
