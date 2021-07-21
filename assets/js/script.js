var postalCode = $('#postalCode');
var yesButton = $('#submitYes');
var noButton = $('#submitNo');
var errModal = document.querySelector('#modal1');
const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";
var eventNum = 8;

document.addEventListener('DOMContentLoaded', function() {
M.Modal.init(errModal);
});

var yesHandler = function (event) {
  event.preventDefault();

  zipCode = postalCode.val().trim();

  if (zipCode.length === 5) {
    getEventRepos(zipCode);
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

var displayRepos = function (events, zipCode) {
  if (events.length === 0) {
    // Create dynamic container to display "No events found in + zipCode"
    return;
  }

  // Dynamic container created 4 lines above displays events in the area.

  for (var i = 0; i < events.length; i++) {

  }








}

// getEventRepos();

// console.log(getEventRepos);

yesButton.on('click', yesHandler);
noButton.on('click', noHandler);