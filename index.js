/**
 * Created by admin on 2017/6/20.
 */
var dev = process.env.NODE_ENV !== 'production';
module.exports = {
  GLOBAL: {
    baseUrl: dev ? 'http://admin.dev.tnf.ibrand.cc/' : '{!API_URL}', // 运行时自动替换变量
  },
};