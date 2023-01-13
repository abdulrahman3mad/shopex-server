const jsonServer = require('json-server');
const auth = require('json-server-auth')
const app = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults()

app.db = router.db
app.use(jsonServer.rewriter({
    "/carts/:type/:id": "/600/carts/:id",
    "/carts/:id": "/600/carts/:id",
    "/products/": "/660/products",
    "/users/:id": "/600/users/:id",
    "/users": "/600/users"
}))
app.use(middlewares)
app.use(auth)
app.use(router)
app.listen(5000)