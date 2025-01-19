const express = require('express');
const router = express.Router();
const { getInvestments, createInvestment } = require('../controllers/investorController');
const { protect, protectRole } = require('../middlewares/authMiddleware');

router.get('/investments', protect, protectRole('investor'), getInvestments);
router.post('/investments', protect, protectRole('investor'), createInvestment);

module.exports = router;
