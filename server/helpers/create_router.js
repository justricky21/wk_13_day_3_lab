const express = require('express');

const createRouter = function (data) {

    const router = express.Router();

    //INDEX
    router.get('/', (req, res) => {
        res.json(data);
    });

    //SHOW

    //CREATE
    router.post('/', (req, res) => {
        data.push(req.body);
        res.json(data);
    })

    //UPDATE

    //DELETE


    return router;

};

module.exports = createRouter;
