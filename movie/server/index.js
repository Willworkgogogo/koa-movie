const Koa = require('koa')
const app = new Koa()
const {normal} = require('./templates/index')

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  ctx.body = normal
})

app.listen(3999)

console.log('server running at http://localhost:3999')