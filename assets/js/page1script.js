const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";
var eventNum = 8;
let listStart = document.getElementById('list-start')
var storedDrinks = [];
var backButton = $('#backButton');


const zipInput = localStorage.getItem('userZip')
console.log(zipInput)
var getEventRepos = function(postalCode) {
    var apiUrl = ticketMasterUrl + '.json?postalCode=' + postalCode + '&size=' + eventNum + '&apikey=' + ticketMasterKey;

    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayEvents(data, postalCode);
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




console.log(storedDrinks)
//getDrink()
getEventRepos(zipInput)
