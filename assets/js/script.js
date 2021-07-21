var postalCode = $('#postalCode');
var yesButton = $('#submitYes');
var noButton = $('#sumbitNo');
var storedDrinks = []







const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";

var yesHandler = function (event) {
    event.preventDefault();

    zipCode = postalCode.val().trim();

    if (zipCode.length === 5) {
        //getEventRepos(zipCode);
        //getDrink()
        //yesButton.on('submit', yesHandler);
        location.replace('results.html')
    } else { 
    console.log('hello')
    return;
    };

};



var getEventRepos = function(postalCode) {
    var apiUrl = ticketMasterUrl + '.json?postalCode=' + postalCode + '&apikey=' + ticketMasterKey;

    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                // displayRepos(data);
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

// getEventRepos();

// console.log(getEventRepos);

function getDrink() {
for (let i=0; i<10; i++) {
    let apiUrlD = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    fetch(apiUrlD)
    .then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
        storedDrinks.push(data)
    })
    }
}
)}
}
console.log(storedDrinks)
yesButton.on('click', yesHandler);
noButton.on('click', yesHandler);