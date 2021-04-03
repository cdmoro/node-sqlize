const express = require('express');
const router = express.Router();
const userRoutes = require('./user');

router.get('/', (req, res) => {
    res.send("holaaaa");
})

router.use('/api/users', userRoutes);

module.exports = router;