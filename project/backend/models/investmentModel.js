const mongoose = require('mongoose');

const investmentSchema = mongoose.Schema(
    {
        startupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Startup' },
        investorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        amount: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Investment', investmentSchema);
