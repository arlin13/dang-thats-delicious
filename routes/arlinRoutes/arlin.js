//delete later
const ex = require('express');
const rutas = ex.Router();

 //Simple route
rutas.get('/', (req, res) => {
  res.send('Rutas de arlin');
});

//Prints something to the console
rutas.get('/hola', (request, response) => {
  console.log('Dijeron hola');
  response.send('Di hola!');
});

//body of request (url)
rutas.get('/test', function(req, res){
  res.send(req.body);
});

//responds with a json object
rutas.get('/json', (req, res)=> {
  res.json({name:'Arlin', age:25, cool:true});
});

//responds with the params received from the url
rutas.get('/req', (req, res) => {
  var response = 'Echoing req params: <br>';
  var name = 'Name: ' + req.query.name + '<br>';
  var age = 'Age: ' + req.query.age;
  res.send(response + name + age);
});

//responds with the query object of the response
//that has all the params of the url query
rutas.get('/req/all', (req, res) => {
  res.send(req.query);
});

//access to the variable of the url
rutas.get('/sayHi/:name', (req, res) => {
  res.send('HOLA ' + req.params.name);
});

//reverse variable name of the url
rutas.get('/reverse/:text', (req, res) => {
  var reversedText = req.params.text.split('').reverse().join('');
  res.send(reversedText);
});

//render view inside of Arlin
rutas.get('/template', (req, res) => {
  res.render('render');
});
module.exports = rutas;
