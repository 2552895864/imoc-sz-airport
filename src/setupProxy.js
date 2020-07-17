const { createProxyMiddleware } = require("http-proxy-middleware");

const IP = "20.48.18.104";
const type = ["dataCenter", "ms", "staff", "billboard", "cm", "rs"];
module.exports = function (app) {
  app.use(
    type.map((item) =>
      createProxyMiddleware(`/${item}`, {
        target: `http://${IP}:8089`,
        changeOrigin: true,
      })
    )
  );
};
