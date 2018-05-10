const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')
const {normal} = require('./templates/index')

// 模板解析器
app.use(views(path.resolve(__dirname, 'views'), {
  extension: 'pug'
}))

// 首页
app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'Janet',
    me: 'Will'
  })
})

app.listen(3999)

console.log('server running at http://localhost:3999')