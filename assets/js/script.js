var postalCode = $('#postalCode');
var yesButton = $('#submitYes');
var noButton = $('#submitNo');
var errModal = document.querySelector('#modal1');
var bummerModal = document.querySelector('#modal2');
const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";
var eventNum = 8;
var storedDrinks = [];

document.addEventListener('DOMContentLoaded', function() {
M.Modal.init(errModal);
});
document.addEventListener('DOMContentLoaded', function() {
  M.Modal.init(bummerModal);
  });

var yesHandler = function (event) {
  event.preventDefault();

  zipCode = postalCode.val().trim();

  if (zipCode.length === 5) {
    getEventRepos(zipCode);
    getDrink();
  } else if (zipCode.length !== 5) { 
    // MODAL POP UP "Must enter a valid 5 digit zip code"
      var instance = M.Modal.getInstance(errModal);
      instance.open();
    return;
  };
};

var noHandler = function (event) {
  event.preventDefault();

  zipCode = postalCode.val().trim();

  if (zipCode.length === 5) {
    getEventRepos(zipCode);
  } else if(zipCode.length !==5) { 
    
    var instance = M.Modal.getInstance(errModal);
      instance.open();
    
      return;
  
    };
};








var getEventRepos = function(postalCode) {
    var apiUrl = ticketMasterUrl + '.json?postalCode=' + postalCode + '&size=' + eventNum + '&apikey=' + ticketMasterKey;

    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                // displayRepos(data);
                console.log(data);
            });
        } else {
            alert('Error ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to TicketMaster');
      });
};

var displayEvents = function (events, zipCode) {
  if (events.length === 0) {
    // Create dynamic container to display "No events found in + zipCode"
    // var instance = M.Modal.getInstance(bummerModal);
    //   instance.open();
    return;
  }

  // Dynamic container created 4 lines above displays events in the area.

  for (var i = 0; i < events.length; i++) {
    // var eventList = document.getElementById('eventList');
    // var eventEl = document.createElement('span');
    // eventEl.classList = 'STYLING HERE';
    // eventList.appendChild(eventEl);
    

    var titleEl = document.createElement('span');
  }








}

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
        // execute a function you'll need to define, when ran you will pass stored drinks as an argument.
      })
    };
  }
)}
}
console.log(storedDrinks);
yesButton.on('click', yesHandler);
noButton.on('click', noHandler);