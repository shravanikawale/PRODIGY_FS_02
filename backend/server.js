const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/employees");

app.use('/api/auth', require('./routes/auth'));
app.use('/api/employees', require('./routes/employees'));

app.listen(5000, () => console.log("Server running on port 5000"));

