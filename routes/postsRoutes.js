const express = require('express');
const router = express.Router();
const data = require('../datas/data.json');

router.get('/', (req, res) => {
    const { q, id } = req.query;
    let result = data.posts;

    // Filter by post title keyword
    if (q) {
        result = result.filter(post => post.title.includes(q));
    }

    // Filter by post ID
    if (id) {
        result = result.filter(post => post.id === Number(id));
    }

    res.json(result);
});

module.exports = router;
