const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.render('hello');
// });

// pass variables of the query url to view template
router.get('/', (req, res) => {
  res.render('hello', {
    dog: req.query.dog
  });
});

module.exports = router;
