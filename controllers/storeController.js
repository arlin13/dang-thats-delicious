const mongoose = require('mongoose');
const Store = mongoose.model('Store');

// exports.myMiddleware = (req, res, next) => {
//   req.name= 'Arlin';
//   next();
// };

exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Middleware'
    // name: req.name
  });
};

exports.addStore = (req, res) => {
  res.render('editStore', {title: 'Edit store'});
}

exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  //store.age = 18; // you can add more things
  await store.save();
  res.redirect('/');
};

//delete later
exports.testMiddleware = (req, res, next) =>{
  next();
};

//delete later
exports.test = function(req, res) {
  res.render('index', {
    title: 'myMiddleware test',
    name: 'my myMiddleware test'
  });
}
