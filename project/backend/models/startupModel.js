const mongoose = require('mongoose');

const startupSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        pitchUrl: { type: String },
        status: { type: String, default: 'pending' },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Startup', startupSchema);
