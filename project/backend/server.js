const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const investorRoutes = require('./routes/investorRoutes');
const startupRoutes = require('./routes/startupRoutes');
const { errorHandler } = require('./utils/errorHandler');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/investor', investorRoutes);
app.use('/api/startup', startupRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
