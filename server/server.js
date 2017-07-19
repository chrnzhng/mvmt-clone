const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const cors = require('cors');
const products_controller = require('./products_controller/products_controller')
const connectionString = require('./postgres.js')

const app = express();

app.use( bodyParser.json() );

app.use(cors({
    origin: 'http://localhost:3000'
}))

massive( connectionString ).then( dbInstance => {
    app.set('db' , dbInstance);


} );

app.get('/MensWatches', products_controller.getAll)

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );