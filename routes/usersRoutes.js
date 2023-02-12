const express = require('express');
const router = express.Router();
const user = require('../datas/users.json');

router.get('/', (req, res) => {
    const { id, name, email } = req.query;
    let result = user.users;

    // Filter by user ID
    if (id) {
        result = result.filter(user => user.id === Number(id));
    }

    // Filter by user name
    if (name) {
        result = result.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    }

    // Filter by user email
    if (email) {
        result = result.filter(user => user.email.toLowerCase().includes(email.toLowerCase()));
    }

    res.json(result);
});

module.exports = router;
