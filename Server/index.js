const express = require ("express");
const connectDB = require('./config/database');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes')
const registerRoutes = require('./routes/registerRoutes')

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/contact', contactRoutes);
app.use('/api/register', registerRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App is running successfully at ${PORT}`)
})