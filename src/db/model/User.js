/**
 * @description  user model
 * @author sam
 */

const seq = require("../seq");
const { STRING, DECIMAL } = require("../types");

const User = seq.define("user", {
  userName: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: "username unique",
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: "password",
  },
  nickName: {
    type: STRING,
    allowNull: false,
    comment: "nick name",
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 3,
    comment: "sex (male 1 ,female 2,3 secret)",
  },
  picture: {
    type: STRING,
    comment: "head portrait picture url",
  },
  city: {
    type: STRING,
    comment: "city",
  },
});

module.exports = { User };
