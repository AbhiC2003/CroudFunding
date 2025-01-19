const express = require('express');
const router = express.Router();
const { createStartup, getMyStartups } = require('../controllers/startupController');
const { protect, protectRole } = require('../middlewares/authMiddleware');

router.post('/startups', protect, protectRole('startup'), createStartup);
router.get('/my-startups', protect, protectRole('startup'), getMyStartups);

module.exports = router;
