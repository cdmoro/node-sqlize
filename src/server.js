require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server listens on http://localhost:${PORT}`);
})