const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events"; //to call the ticketmaster api
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth"; // to call the cocktail api
var eventNum = 8; 
let listStart = document.getElementById('list-start') //linking to the index
var storedDrinks = [];
var backButton = $('#backButton'); //linking a button the the index


const zipInput = localStorage.getItem('userZip') // getting the Zipcode
console.log(zipInput) 
var getEventRepos = function(postalCode) {     //making the postal code function
    var apiUrl = ticketMasterUrl + '.json?postalCode=' + postalCode + '&size=' + eventNum + '&apikey=' + ticketMasterKey;  //concatenating parts of the API url

    fetch(apiUrl) 
    .then(function (response) {
        if (response.ok) { //making sure we get a valid response
            response.json().then(function (data) {
                displayEvents(data, postalCode);  //displaying the postal code 
                console.log(data);
                // window.location.replace('./results.html') works but no data pulled
            });
        } else {
            alert('Error ' + response.statusText);
        }
    })
    .catch(function (error) {
        alert('Unable to connect to TicketMaster');
    });
};









getEventRepos(zipInput)
