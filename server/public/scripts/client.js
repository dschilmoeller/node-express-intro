$(document).ready(onReady);

function onReady() {
    console.log('Ready!');
    
    // function to get quotes from the server
    getQuotes();
}

function getQuotes() {
    // use AJAX to get quotes from server.
    // AJAX: part of jQuery
    // used to communicate between front end and server side scripts.
    // passing an object in AJAX which will describe request
    // .then(function)<- this function is called function because anonymous.
    // 
    $.ajax({
        // method name MUST be capitalized.
        // this tells the front end script where to go on the server-side script(s)
        // tells where to get object
        method: 'GET',
        url: '/quotes'
        
        // .then does something with the response from the server.
    }).then(function(response) {

        // the response will grab the returned quotelist
        // function here is an anonymous ('blind') function, executes only this once and is contained
        // within another function so will not be referenced again.
        // if quote list was added to by POST request
        // then it will include the new quote(s).

        console.log('AJAX Success!', response);
        
        // pass result of response into render function.
        renderToDOM(response);

        // .catch - occurs when there is an error
        // deals with unexpected situations or errors.
        // would also be a useful troubleshooting tool as 
        // would tell you you've made it to the end of the function.
    }).catch(function() {
        alert('Request Failed. Try again later.')
    });
    // Listener for newQuoteBtn
    $('#newQuoteBtn').on('click', addQuote);
}

function addQuote(){ 
    // console.log('inside addQuote function');
    // make a POST request to the server

    $.ajax({
        method: 'POST', // must be capitalized
        url: '/', // route
        data: { // becomes req.body in server?
            text: 'Is that rock getting bigger?', // req.body.text
            author: 'Anonymous Dinosaur' // req.body.author
        }
    }).then(function(response) {
        console.log('POST to / functioning.');
        getQuotes();
    }).catch( () => {
        alert('POST to / Failed. Murderous Hamsters deployed.');
    })

}

function renderToDOM(quotes) {
    // empty DOM    
    $('#quotesOutput').empty()
    
    // testing log
    console.log('in renderToDOM')
    
    // loop to cycle through returned object and spit out appropriate HTML.
    for (let quote of quotes) {
        $('#quotesOutput').append(`
        <li>
        "${quote.text}" by <i>${quote.author}</i>
        </li>
        `)
    }
}