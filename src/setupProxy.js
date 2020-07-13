const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/staff", {
      target: "http://10.85.14.79:8089",
      changeOrigin: true,
    })
  );
};

