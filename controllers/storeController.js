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
