const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

    const router = express.Router();

    //INDEX
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err} );
        })
    });

    //SHOW

    //CREATE
    router.post('/', (req, res) => {
        const newData = req.body;
        collection
        .insertOne(newData)
        .then(() => collection
        .find()
        .toArray())
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err} );
        })
    })

    //UPDATE

    //DELETE
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne( {_id: ObjectID(id)} )
        .then(() => collection
        .find()
        .toArray())
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err} );
        })
    })

    return router;

};

module.exports = createRouter;
