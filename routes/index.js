const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.homePage);
router.get('/test', storeController.testMiddleware, storeController.test); //delete later
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

module.exports = router;
