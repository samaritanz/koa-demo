/**
 * @description user controller
 * @author sam
 */

const { getUserInfo, createUser } = require("../services/user");
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const { registerUserNameNotExistInfo } = require("../model/ErrorInfo");
const doCrypto = require("../utils/cryp");

/**
 * check username is exist
 * @param {*} userName user name
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName);
  console.log("userInfo", userInfo);
  if (userInfo) {
    // exist
    return new SuccessModel();
  } else {
    // not exist
    return new ErrorModel(registerUserNameNotExistInfo);
  }
}

/**
 *
 * @param {string} userName
 * @param {string} password
 * @param {number} gender  male 1, female 2,  secret 3
 * @returns
 */
async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName);
  if (userInfo) {
    return new ErrorModel(registerUserNameExistInfo);
  }
  // register
  try {
    await createUser({ userName, password: doCrypto(password), gender });
    return new SuccessModel();
  } catch (error) {
    console.error(error.message, error.stack);

    return new ErrorModel(registerFailInfo);
  }
}

module.exports = {
  isExist,
  register,
};
