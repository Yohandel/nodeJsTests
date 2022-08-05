const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://ycuevas:ycuevas123456@cluster0.wabjr40.mongodb.net/pruebasYCM?retryWrites=true&w=majority'


mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connectes to db");
    }).catch((err) => {
        console.log(err);
    });
    