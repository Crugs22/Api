const express = require('express');
const { idleTimeoutMillis, password } = require('pg/lib/defaults');

const routes = express.Router();
const users = [{
    id: 1,
    name: 'Caio',
    email: 'caio@teste.com',
    password: '123456'
}];

routes.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
       return res.status(200).json(user);
    }


    return res.status(401).json({ error: 'Credentials invalid' });
})

module.exports = routes;