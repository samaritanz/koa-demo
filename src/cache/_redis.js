/**
 * @description connect redis
 * @author sam
 */

const redis = require("redis");
const { REDIS_CONF } = require("../conf/db");

const redisClient = redis.createClient(REDIS_CONF);

redisClient.on("error", (err) => {
  console.error("error", err);
});

/**
 *
 * @param {string} key key
 * @param {string} val  value
 * @param {number} timeout expire
 */

function set(key, val, timeout = 60 * 60) {
  if (typeof val === "object") {
    val = JSON.stringify(val);
  }
  redisClient.set(key, val);
  redisClient.expire(key, timeout);
}

/**
 *
 * @param {string} key key
 */
function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      }
      if (val === null) {
        resolve(null);
        return;
      }
      try {
        resolve(JSON.parse(val));
      } catch (error) {
        resolve(error);
      }
    });
  });
  return promise;
}

module.exports = {
  set,
  get,
};
