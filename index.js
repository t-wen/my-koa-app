const Koa = require('koa');
const app = new Koa();
const main = ctx => {
  ctx.response.body = 'Hello World';
};
app.listen(3000);
console.log("服务已启动");
