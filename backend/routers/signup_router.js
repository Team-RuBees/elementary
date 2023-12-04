const express = require('express');
const collection = require('../database');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Request body', req.body);

    const data = {
        name: name,
        email: email,
        password: password
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("Email already used");
        } else {
            res.json("Welcome!");
            await collection.insertMany([data]);
        }
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json("Internal Server Error");
    }
});

module.exports = router;
