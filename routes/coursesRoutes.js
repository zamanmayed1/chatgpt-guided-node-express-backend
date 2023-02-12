const express = require('express');
const router = express.Router();
const courses = require('../datas/courses.json');

router.get('/', (req, res) => {
    const { id, title } = req.query;
    let result = courses;

    // Filter by course ID
    if (id) {
        result = result.filter(course => course.id === Number(id));
    }

    // Filter by course title
    if (title) {
        result = result.filter(course => course.title.toLowerCase().includes(title.toLowerCase()));
    }

    res.json(result);
});

module.exports = router;
