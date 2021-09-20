/**
 * @description user services
 * @author sam
 */

const { User } = require("../db/model/User");
const { formatUser } = require("./_format");
/**
 * get user info
 * @param {*} userName user name
 * @param {*} password password
 */
async function getUserInfo(userName, password) {
  const whereOpt = { userName };
  if (password) {
    Object.assign(whereOpt, { password });
  }

  const result = await User.findOne({
    attributes: ["id", "userName", "nickName", "picture", "city"],
    where: whereOpt,
  });
  if (result == null) {
    return result;
  }
  // format
  const formatRes = formatUser(result.dataValues);
  return formatRes;
}

module.exports = {
  getUserInfo,
};
