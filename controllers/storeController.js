exports.myMiddleware = (req, res, next) => {
  req.name= 'Arlin';
  next();
};

exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Middleware',
    name: req.name
  });
};

exports.testMiddleware = (req, res, next) =>{
  next();
};

exports.test = function(req, res) {
  res.render('index', {
    title: 'myMiddleware test',
    name: 'my myMiddleware test'
  });
}
