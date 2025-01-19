const Startup = require('../models/startupModel');

exports.createStartup = async (req, res) => {
    const { name, description, pitchUrl } = req.body;
    try {
        const startup = new Startup({
            name,
            description,
            pitchUrl,
            createdBy: req.user.id,
            status: 'pending',
        });
        await startup.save();
        res.status(201).json(startup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMyStartups = async (req, res) => {
    try {
        const startups = await Startup.find({ createdBy: req.user.id });
        res.status(200).json(startups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
