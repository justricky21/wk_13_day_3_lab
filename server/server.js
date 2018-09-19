const express = require('express');
const app = express();
const path = require('path');
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));
app.use(parser.json());
const bucketListRouter = createRouter([{description: 'yeeee'}]);
app.use('/api/bucketList', bucketListRouter);



app.listen(3000, function () {
    console.log(`Listening on port ${this.address().port}`);    
})