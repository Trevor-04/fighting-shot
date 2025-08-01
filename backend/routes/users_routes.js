const express = require('express');
const userController = require('../functions/users_func');

const router = express.Router();

router.post('/new/user', async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userController.newUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating new user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await userController.getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
