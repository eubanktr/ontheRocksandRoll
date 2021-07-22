const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";
var eventNum = 8;
let listStart = document.getElementById('list-start')
var storedDrinks = [];
var backButton = $('#backButton')

var goBack = function Back (event) {
    event.preventDefault();
    window.location.replace("index.html");
  };
  
  backButton.addEventListener('click', goBack);


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

var displayEvents = function (events) {
if (events.length === 0) {
    // Create dynamic container to display "No events found in + zipCode"
    // var instance = M.Modal.getInstance(bummerModal);
    //   instance.open();
    return;
}

  // Dynamic container created 4 lines above displays events in the area.


    //var eventList = document.getElementById('eventList');
    //var eventEl = document.createElement('ul');
    for (var i = 0; i < events._embedded.events.length; i++) {
    var eventL = document.createElement('li')
    eventL.textContent = events._embedded.events[i].name
    listStart.append(eventL)
    console.log(eventL)
    // eventEl.classList = 'STYLING HERE';
    // eventList.appendChild(eventEl);
    //eventEl.append(eventL)
    //eventList.append(eventEl)
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
getDrink()
getEventRepos(zipInput)
