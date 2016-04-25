import Router from 'koa-router'
const router = new Router({ prefix: '/user' })

router.get('/:name', async ctx => {
  const user = ctx.params.name
  await ctx.render('user', { user })
})

export default router
