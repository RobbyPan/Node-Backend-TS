import util from 'util';
export default () => {
  return (err: any, req: any, res: any, next: any) => {
    res.status(500).json({
      message: '服务器维护中',
      error: util.format(err),
    });
  };
};
