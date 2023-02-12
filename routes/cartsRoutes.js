const express = require('express');
const router = express.Router();
const cart = require('../datas/cart.json');

router.get('/:email', (req, res) => {
    const email = req.params.email;
    const userCartItems = cart.filter(item => item.userEmail === email);
    res.json(userCartItems);
});

router.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    const results = cart.filter(item => item.productId === productId);
    res.json(results);
});

module.exports = router;
