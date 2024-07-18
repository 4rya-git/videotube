const router = require('express').Router();

const healthCheckController = require('../controllers/healthCheck.controller');

router.get('/', healthCheckController.healthCheck); // OR router.route('/').get(healthCheckController.healthCheck);

module.exports = router;