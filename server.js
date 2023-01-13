const jsonServer = require('json-server');
const auth = require('json-server-auth')
const app = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later

app.db = router.db
const port = process.env.PORT || 3200; // <== You can change the port

app.use(auth)
app.use(router)
app.listen(3000)