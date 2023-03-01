// require gives us a function from express
const express = require('express');

// create an instance of express by calling the function
const app = express()

// can be anything in theory, but sticking with 5000 for now.
const port = 8000

// express static file serving (method), makes our public folder available.
app.use(express.static('server/public'));

// starts our server
app.listen(port, ()=> {
    console.log('Listening on Port', port);
})


// GET/POST examples

const quoteList = require("./modules/quoteList");

// the normal url is : http://localhost:5000/
// to use this GET request, must go to http://localhost:5000/quotes
app.get('/quotes', function(req, res) {
    console.log('Yoyoyo in the req/res function');
    // send back the list of quotes
        // we can see in our browser
        res.send(quoteList);
        // respond with a status code.
        // res.status(400).send('This request is broken.')

})