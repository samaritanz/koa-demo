const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-generic-session");
const redisStore = require("koa-redis");

const errorViewRouter = require("./routes/view/error");
const index = require("./routes/index");
const userViewRouter = require("./routes/view/user");
const userApiRouter = require("./routes/api/user");
const { REDIS_CONF } = require("./conf/db");
// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));
debugger;
app.use(
  views(__dirname + "/views", {
    extension: "ejs",
  })
);

// session config
// app.keys = ["UsdU*123_+ijs"];
// app.use(
//   session({
//     key: "weibo.sid",
//     prefix: "weibo:sess:",
//     cookie: {
//       path: "/",
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000, // ms
//     },
//     store: redisStore({
//       all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
//     }),
//   })
// );

// routes
app.use(index.routes(), index.allowedMethods());
app.use(userViewRouter.routes(), userViewRouter.allowedMethods());
app.use(userApiRouter.routes(), userApiRouter.allowedMethods());

app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods());
// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
