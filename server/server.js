const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive')
const cors = require('cors');

const products_controller = require('./controllers/products_controller/products_controller');
const cart_controller = require('./controllers/cart_controller/cart_controller');

const connectionString = require('./postgres.js')

const passport = require('passport');
const Auth0Strategy = require('passport-auth0')
const config = require('./config');

const app = express();

app.use( bodyParser.json() );

app.use(cors({
    origin: 'http://localhost:3000'
}))

massive( connectionString ).then( dbInstance => {
    app.set('db' , dbInstance);
    
    dbInstance.setSchema().then(() => console.log('Tables successfully reset!')).catch(err => console.log(err));


    app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: config.sessionSecret
    }))
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new Auth0Strategy({    //this needs to be copied EXACTLY the same caps and all
    domain:       config.auth0.domain,
    clientID:     config.auth0.clientID,
    clientSecret: config.auth0.clientSecret,
    callbackURL:  config.auth0.callbackURL
    },  
    //set up to here and then go to the Auth0 site and create a new app/client
    //all three of the domian file,client secret and other stuff from Auth0 goes into config.js
        function(accessToken, refreshToken, extraParams, profile, done) {
        console.log('someone tried to access', profile);
       

    //logic for passing in new or existing account

    done(null, {loggedIn : true})
    }));
    

    passport.serializeUser(function(user, done) {      //at this point the authentication process is over
    console.log('serializing', user);
    done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        console.log('deserialize', user)
    done(null, user);
    });

    //these are the endppints, this first one kicks off the auth session
    app.get('/auth', passport.authenticate('auth0'));

    app.get('/auth/callback', passport.authenticate('auth0', 

    { successRedirect: 'http://localhost:3000/'}));

    app.get('/auth/me', function(req, res) {
    if (!req.user) return res.status(200).send('No one logged in!');
    res.status(200).send(req.user);
    })
    app.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('/');
    })

    // GET Requests

    app.get('/MensWatches', products_controller.getAll)
    app.get('/WatchId/:id', products_controller.getId)
    app.get('/readCart', cart_controller.getCart)

    // POST

    app.post('/addToCart', cart_controller.addToCart)

    // DELETE

    app.delete('/removeFromCart/:id', cart_controller.deleteFromCart)


} );

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );