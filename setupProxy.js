// React17
// const proxy = require('http-proxy-middleware');
// module.exports = function(app){
//   app.use(
//     proxy('/api1', {
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//       pathRewrite: {'^/api1': ''},
//     }),
//     proxy('/api2', {
//       target: 'http://localhost:5001',
//       changeOrigin: true,
//       pathRewrite: {'^/api2': ''},
//     }),
//   )
// }

// React18
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true, // 控制服务器收到的请求头中Host的值 true:5000, false:3000
      pathRewrite: { '^/api1': '' },
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' },
    })
  );
}
