const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoute = require('./routes/posts');
const { MongoClient } = require('mongodb');

const app = express();

app.use(bodyParser.json());

// Conexión a la base de datos
 mongoose.connect('mongodb+srv://diegointernacional2017:74085046Estranged@cluster0.2nrimen.mongodb.net/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB exitosa.');
});


app.use('/posts', postRoute);

// Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('prueba Servidor escuchando en el puerto ' + port);
});