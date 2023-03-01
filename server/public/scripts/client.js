$(document).ready(onReady);

function onReady() {
    console.log('Ready!');
    
    // function to get quotes from the server
    getQuotes();
}

function getQuotes() {
    // use AJAX to get quotes from server.
    // AJAX: part of jQuery
    // passing an object in AJAX which will describe request
    // .then(function)<- this function is called function because anonymous.
    $.ajax({
        method: 'GET',
        url: '/quotes'

    }).then(function(response) {
        // the response will grab the returned quotelist
        console.log('AJAX Success!', response);
        
        // pass result of response into render function.
        renderToDOM(response);

        // .catch - occurs when there is an error
    }).catch(function() {
        alert('Request Failed. Try again later.')
    });
}

function renderToDOM(quotes) {
    $('#quotesOutput').empty()
    console.log('in renderToDOM')
    for (let quote of quotes) {
        $('#quotesOutput').append(`
        <li>
        "${quote.text}" by <i>${quote.author}</i>
        </li>
        `)
    }
}