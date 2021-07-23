var postalCode = $('#postalCode');
var yesButton = $('#submitYes');
var noButton = $('#submitNo');
var errModal = document.querySelector('#modal1');
var bummerModal = document.querySelector('#modal2');
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
    localStorage.setItem('userZip', zipCode)
    localStorage.setItem('buttonId', 'Yes')
    location.replace('./results.html')
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
    location.replace('./resultsno.html')
    localStorage.setItem('userZip', zipCode)
    localStorage.setItem('buttonId', 'No')
  } else if(zipCode.length !==5) { 
    var instance = M.Modal.getInstance(errModal);
    instance.open();
    return;
  };
};

yesButton.on('click', yesHandler);
noButton.on('click', noHandler);
