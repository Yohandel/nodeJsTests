const express = require('express');
const User = require('../models/user');
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
const router = new express.Router()

router.get('/users', (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err);
        });
})

router.get('/users/:id', (req, res) => {
    const id = req.params.id
    User.findById(id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err);
        });
})

router.post('/users', (req, res) => {
    const user = new User({ ...req.body, status: true });
    console.log(req.body);
    user.save()
        .then((result) => {
            res.send(result)

        }).catch((err) => {
            res.statusCode = 400
            // res.send('Se jodio la bicicleta')
            res.send(err)
        });
})

router.delete('/users/:id', (req, res) => {
    const id = req.params.id
    User.findByIdAndUpdate(id, { status: false })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err);
            res.send('Error eliminando usuario').sendStatus(500)
        });
})

router.put('/users/:id', (req, res) => {
    const id = req.params.id
    User.findByIdAndUpdate(id, req.body)
        .then((result) => {
            res.send("Registro actulizado satisfactoriamente")
        }).catch((err) => {
            console.log(err);
            res.send('Error eliminando usuario').sendStatus(500)
        });
})
module.exports = router;