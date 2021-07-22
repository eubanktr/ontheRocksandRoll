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




    //var eventList = document.getElementById('eventList');
    //var eventEl = document.createElement('ul');
    for (var i = 0; i < events._embedded.events.length; i++) {
    var eventL = document.createElement('li');
    var eventUrl = document.createElement ('a');
    var pageBrk = document.createElement('br');
    var infoIcon = document.createElement('i');
    var icon = 'info'
    var eventText = '  Click here for more info!' // document.createTextNode('Click Here to Buy Tickets!');
    eventL.textContent = events._embedded.events[i].name
    eventUrl.textContent = events._embedded.events[i].url
    listStart.append(eventL);
    eventL.append(pageBrk);
    eventL.append(infoIcon);
    eventL.append(eventUrl);
    // console.log(eventL)
    eventL.classList = 'orange-text collection-item';
    infoIcon.classList = 'tiny material-icons';
    eventUrl.setAttribute('target', '_blank');
    eventUrl.setAttribute(`href`, eventUrl.textContent);
    eventUrl.innerHTML = eventText;
    infoIcon.innerHTML = icon;
    }
}
function getDrink() {
    for (let i=0; i<10; i++) {
        let apiUrlD = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        fetch(apiUrlD)
        .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            storedDrinks.push(data)
            // execute a function you'll need to define, when ran you will pass stored drinks as an argument.
        })
        };
    }
    )}
    }
console.log(storedDrinks)
//getDrink()
getEventRepos(zipInput)
