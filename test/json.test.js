/**
 * @description test demo
 * @author sam
 */
const server = require("./server");
test("json return correct", async () => {
  // expect(50 + 50).not.toBe(100);
  const res = await server.get("/json");
  expect(res.body).toEqual({
    title: "koa2 json",
  });
  expect(res.body.title).toBe("koa2 json");
});
