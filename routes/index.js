import Router from 'koa-router'
const router = new Router()

router.get('/', async ctx => {
  await ctx.render('index')
})

router.get('/about', async ctx => {
  await ctx.render('about')
})

export default router
