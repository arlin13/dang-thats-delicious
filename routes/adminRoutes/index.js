const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Admin works too!');
});

module.exports = router;
