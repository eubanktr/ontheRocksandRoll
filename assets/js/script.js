var postalCode = $('#postalCode');
var yesButton = $('#submitYes');
var noButton = $('#sumbitNo');







const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";

var yesHandler = function (event) {
  event.preventDefault();

  zipCode = postalCode.val().trim();

  if (zipCode.length === 5) {
    getEventRepos(zipCode);
  } else { 
    
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

yesButton.on('click', yesHandler);