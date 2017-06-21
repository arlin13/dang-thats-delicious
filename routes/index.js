const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
// composition: wrapping a funtion in another function
const {catchErrors} = require('../handlers/errorHandlers');

// Do work here
router.get('/', storeController.homePage);
router.get('/test', storeController.testMiddleware, storeController.test); //delete later
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;
