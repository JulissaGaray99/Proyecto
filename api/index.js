'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,
dburl = 'mongodb://Admin:chocolateadmin@proyecto-shard-00-00-bcf9m.mongodb.net:27017,proyecto-shard-00-01-bcf9m.mongodb.net:27017,proyecto-shard-00-02-bcf9m.mongodb.net:27017/test?ssl=true&replicaSet=Proyecto-shard-0&authSource=admin&retryWrites=true',
    // dburl = 'mongodb://pabs:1biblioteca9@ds163680.mlab.com:63680/bd_biblioteca',
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**mongodb+srv://trickered:<password>@proyecto-jts49.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión con la base de datos: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


const utiles_institucion = require('./componentes/utiles_institucion/utiles_institucion.route');
const padres_familia = require('./componentes/padres_familia/padres_familia.route');
const cita = require('./componentes/cita/cita.route');
const pcomercial = require('./componentes/pagina_comercial/pcomercial.route');
const idioma = require('./componentes/idioma/idioma.route');
const institucion = require('./componentes/instituciones/instituciones.route');
const utiles_mep = require('./componentes/utiles_mep/utiles_mep.route');
const redes_sociales = require('./componentes/redes_sociales/redes_sociales.route');
app.use('/api', redes_sociales);
app.use('/api', utiles_mep);
app.use('/api', institucion);
app.use('/api',idioma);
app.use('/api', pcomercial);
app.use('/api', cita);
app.use('/api', padres_familia);
app.use('/api', utiles_institucion)





// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};
