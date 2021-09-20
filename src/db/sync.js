/**
 * @description sequelize 同步数据库
 */

const seq = require("./seq");
// require("../../../sequelize-test/src/model");
require("./model");
seq.authenticate().then(
  () => {
    console.log("connect successful");
  },
  () => {
    console.log("connect error");
  }
);

seq.sync({ force: true }).then(() => {
  console.log("sync ok");
  process.exit();
});
