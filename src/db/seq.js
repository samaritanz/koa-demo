const Sequelize = require("sequelize");
const { MYSQL_CONF } = require("../conf/db.js");
const { isProd } = require("../utils/env");

const { host, user, password, database } = MYSQL_CONF;
const config = {
  host,
  dialect: "mysql",
};

// online prod
if (isProd) {
  conf.pool = {
    max: 5, //连接池最大连接数量
    min: 0,
    idle: 10000, //如果一个连接池10s之内没有被使用，则释放
  };
}

const seq = new Sequelize(database, user, password, config);

module.exports = seq;
