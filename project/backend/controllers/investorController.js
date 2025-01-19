const Investment = require('../models/investmentModel');

exports.getInvestments = async (req, res) => {
    try {
        const investments = await Investment.find({ investorId: req.user.id });
        res.status(200).json(investments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createInvestment = async (req, res) => {
    const { startupId, amount } = req.body;
    try {
        const investment = new Investment({
            startupId,
            investorId: req.user.id,
            amount,
        });
        await investment.save();
        res.status(201).json(investment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
