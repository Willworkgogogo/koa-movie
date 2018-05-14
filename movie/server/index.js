const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')
const pug = require('pug')
const {normalTpl, pugTpl} = require('./templates/index')

app.use(views(path.resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'Janet',
    me: 'Will'
  })
})

app.listen(3999)

console.log('server running at http://localhost:3999')