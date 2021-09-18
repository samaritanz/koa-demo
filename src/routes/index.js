const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  console.log("before debugger");
  debugger;
  console.log("after debugger");
  await ctx.render("index", {
    title: "Hello Koa 2!",
    isMe: false,
    blogList: [
      {
        id: 1,
        title: "aaa",
      },
      {
        id: 2,
        title: "bbb",
      },
      {
        id: 3,
        title: "ccc",
      },
    ],
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  // const session = ctx.session;
  // if (session.viewNum === null) {
  //   session.viewNum = 0;
  // }
  // session.viewNum++;
  ctx.body = {
    title: "koa2 json",
    // viewNum: session.viewNum,
  };
});

router.get("/profile/:username", async (ctx, next) => {
  const { username } = ctx.params;
  ctx.body = {
    title: "koa2 json",
    username,
  };
});

router.get("/loadMore/:username/:pageIndex", async (ctx, next) => {
  const { username, pageIndex } = ctx.params;
  ctx.body = {
    title: "koa2 json",
    username,
    pageIndex,
  };
});

module.exports = router;
