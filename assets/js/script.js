







const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events/";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";


var getEventRepos = function(postalCode) {
    var apiUrl = ticketMasterUrl + '.json?postalCode=' + postalCode + '&apikey=' + ticketMasterKey;

    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayRepos(data);
            });
        } else {
            alert('Error ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to TicketMaster');
      });
};

console.log(getEventRepos);