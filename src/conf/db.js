const { isProd } = require("../utils/env");

let REDIS_CONF = {
  port: 6379,
  host: "127.0.0.1",
};

let MYSQL_CONF = {
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3306",
  database: "koa_weibo",
  //   dialect: "mysql",
};

if (isProd) {
  // online
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "123456",
    port: "3306",
    database: "koa_weibo",
    //   dialect: "mysql",
  };
}
