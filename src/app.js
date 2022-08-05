const express = require('express');
require('./db/mongoose')
var cors = require('cors')
const usersRoutes = require('./routes/users');
const app = express()
app.use(cors())
const port = process.env.PORT || 3000
app.use(express.json())
app.use(usersRoutes)


app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ' + port);
})