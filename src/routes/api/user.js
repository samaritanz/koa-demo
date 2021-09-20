/**
 * @description user api route
 * @author sam
 */

const router = require("koa-router")();
const { isExist } = require("../../controller/user");
router.prefix("/api/user");

// register route
router.post("/register", async (ctx, next) => {});

// check username is exist
router.post("/isExist", async (ctx, next) => {
  const { userName } = ctx.request.body;
  ctx.body = await isExist(userName);
  // ctx.body = {
  //   error: false,
  // };
});

module.exports = router;
