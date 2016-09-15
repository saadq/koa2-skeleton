import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import rootRoutes from './routes/index'
import userRoutes from './routes/user'

const app = new Koa()

app.use(views(`${__dirname}/views`, { extension: 'jade' }))
app.use(serve(`${__dirname}/public`))
app.use(rootRoutes.routes())
app.use(rootRoutes.allowedMethods())
app.use(userRoutes.routes())
app.use(userRoutes.allowedMethods())

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})

export default app
