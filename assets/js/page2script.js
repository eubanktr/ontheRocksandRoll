function getData(url){
    fetch(url)  /* read over http and request this data from a server */
    .then(response) => {
        console.log(response);  /* console log only the data we need */
        if (!response.ok){
            throw response;  /* enables us to use the catch block */
        }
        return response.json();

    })

    .then(function(data) {
        console.log(data);  /* access to the important information to render display */
    })

    .catch(function(error) {   
        console.error(error)
    });
}


/* URL's to generate:
    https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key}

    example: 
    https://app.ticketmaster.com/discovery/v1/events.json?apikey=4dsfsf94tyghf85jdhshwge334

    cocktail recipe:
    www.thecocktaildb.com/api/json/v1/1/random.php

    */