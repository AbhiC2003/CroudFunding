const express = require('express');
const router = express.Router();
const { getPendingStartups, approveStartup } = require('../controllers/adminController');
const { protect, protectRole } = require('../middlewares/authMiddleware');

router.get('/pending-startups', protect, protectRole('admin'), getPendingStartups);
router.post('/approve-startup/:id', protect, protectRole('admin'), approveStartup);

module.exports = router;
