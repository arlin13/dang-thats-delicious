//delete later
const ex = require('express');
const rutas = ex.Router();

rutas.get('/', (req, res) => {
  res.send('Rutas de arlin');
});

rutas.get('/hola', (request, response) => {
  console.log('Dijeron hola');
  response.send('Di hola!');
});

rutas.get('/test', function(req, res){
  res.send(req.body);
});

rutas.get('/json', (req, res)=> {
  res.json({name:'Arlin', age:25, cool:true});
});

rutas.get('/req', (req, res) => {
  var response = 'Echoing req params: <br>';
  var name = 'Name: ' + req.query.name + '<br>';
  var age = 'Age: ' + req.query.age;
  res.send(response + name + age);
});

rutas.get('/req/all', (req, res) => {
  res.send(req.query);
});

rutas.get('/sayHi/:name', (req, res) => {
  res.send('HOLA ' + req.params.name);
});

module.exports = rutas;
