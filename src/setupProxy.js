const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/transaction_history",
    createProxyMiddleware({
      target: "https://dev.expressfintech.in",
      changeOrigin: true,
      secure: false, // ⬅️ this disables SSL verification in dev
    })
  );
};
