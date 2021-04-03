const User = require('../models/user');

const getUsers = async (req, res) => {
    const users = await User.findAll()
    res.json(users);
}

module.exports = {
    getUsers
}