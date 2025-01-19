const Startup = require('../models/startupModel');

exports.getPendingStartups = async (req, res) => {
    try {
        const startups = await Startup.find({ status: 'pending' });
        res.status(200).json(startups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.approveStartup = async (req, res) => {
    const { id } = req.params;
    try {
        const startup = await Startup.findById(id);
        if (!startup) {
            return res.status(404).json({ message: 'Startup not found' });
        }
        startup.status = 'approved';
        await startup.save();
        res.status(200).json({ message: 'Startup approved' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
