/**
 * @description user controller
 * @author sam
 */

const { getUserInfo } = require("../services/user");
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const { registerUserNameNotExistInfo } = require("../model/ErrorInfo");
/**
 * check username is exist
 * @param {*} userName user name
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName);
  if (userInfo) {
    // exist
    return new SuccessModel(userInfo);
  } else {
    // not exist
    return new ErrorModel(registerUserNameNotExistInfo);
  }
}

module.exports = {
  isExist,
};
