const express = require('express');
const {
    routes,
    direction,
    snake,
} = require('../config.json');

const router = express.Router();

router.get(routes.info, (req, res) => {
    const data = {
        color: snake.color,
        head_url: snake.head_url,
        name: snake.name,
        taunt: snake.taunt.start,
    };

    res.json(data);
});

router.post(routes.start, (req, res) => {
    const data = {
        taunt: snake.taunt.start
    };

    res.json(data);
});

router.post(routes.move, (req, res) => {
    const data = {
        move: direction.up,
        taunt: snake.taunt.move
    };

    res.json(data);
});

router.post(routes.end, (req, res) => {
    res.end();
});

module.exports = router;
