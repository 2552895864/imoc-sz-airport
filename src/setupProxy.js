const { createProxyMiddleware } = require("http-proxy-middleware");

const IP = '20.48.18.104'
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/staff", {
      target: `http://${IP}:8089`,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/billboard", {
      target: `http://${IP}:8089`,
      changeOrigin: true,
    })
  );
};

