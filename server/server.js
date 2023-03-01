// require gives us a function from express
const express = require('express');
// require body-parser
const bodyParser = require('body-parser')

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

// moves quote list to a different module (file)
// const quoteList = require("./modules/quoteList");

let quoteList = [
    {text : 'Nationwide is on your side', author: 'Nationwide'},
    {text : 'Just Do It!', author: 'Nike'},
    {text : 'You\'re in good hands', author: 'Allstate'}
];

// the normal url is : http://localhost:5000/
// to use this GET request, must go to http://localhost:5000/quotes
app.get('/quotes', function(req, res) {
    console.log('Yo Schwami in the req/res function');
    // send back the list of quotes
        // we can see in our browser
        res.send(quoteList);
        // res.send acts similar to a return; any code after this
        // will do nothing.

        // respond with a status code.
        // res.status(400).send('This request is broken.')
})

// configuring our instance of the server to use body-parser
// body-parser allows us to read the data received with a POST request.
// required for req.body, below
app.use(bodyParser.urlencoded({ extended: true }))

// Route for POST request
// also our first lovely arrow functions.
// the below is another anonymous function, which arrow functions are well suited for.



app.post('/', (req, res) => {
    console.log("You're going POSTal mate!!") 
    
    // this is grabbing a new quote from the request body
    // the request body is the data that is sent from the client.
    let incomingText = req.body.text;
    let incomingAuthor = req.body.author;
    
    console.log('Incoming text to add:', incomingText);
    console.log('Incoming author to add', incomingAuthor);

    // new quote object which will be pushed to the quotesList array
    const newQuote = {
        text : incomingText ,
        author : incomingAuthor
    };

    console.log('My new quote', newQuote);
    quoteList.push(newQuote);
    console.log('All quotes', quoteList)

    // Send weird status
    res.sendStatus(201);
});