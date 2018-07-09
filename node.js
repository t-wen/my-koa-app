const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) =>{
	console.log('函数1，1');
	await next();
	console.log('函数1，2');
});

app.use(async(ctx, next) =>{
	console.log('函数2，1');
	await next();
	console.log('函数2，2');
});

app.use(async ctx =>{
	console.log('函数3，1');
	ctx.body = 'Hello World';
});

app.listen(3000);
