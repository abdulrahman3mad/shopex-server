const jsonServer = require('json-server');
const auth = require('json-server-auth')
const app = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 5000;


app.db = router.db
app.use(jsonServer.rewriter({
    "/carts/:type/:id": "/600/carts/:id",
    "/carts/:id": "/600/carts/:id",
    "/users/:id": "/600/users/:id",
    "/users": "/600/users"
}))

app.use(middlewares)
app.use(auth)
app.use(router)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;