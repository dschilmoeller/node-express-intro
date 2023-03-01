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