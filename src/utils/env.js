const ENV = process.env.NODE_ENV;

module.exports = {
  isDev: Env === "dev",
  notDev: Env !== "dev",
  isProd: Env === "production",
  notProd: Env !== "production",
  isTest: Env === "test",
  notTest: Env !== "test",
};
