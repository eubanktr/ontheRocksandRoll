var postalCode = $('#postalCode');
var yesButton = $('#submitYes');
var noButton = $('#submitNo');
var errModal = document.querySelector('#modal1');
var bummerModal = document.querySelector('#modal2');
var eventNum = 8;
var storedDrinks = [];



document.addEventListener('DOMContentLoaded', function() {
M.Modal.init(errModal);  //alerts when we have not imputted a 5-digit zip code
});
document.addEventListener('DOMContentLoaded', function() {
    M.Modal.init(bummerModal);  // alerts when we have nothing happpening in that zip code
});

var yesHandler = function (event) {
    event.preventDefault();

    zipCode = postalCode.val().trim(); //trims white space off the entry for the zipcode
  if (zipCode.length === 5) {
    
    localStorage.setItem('userZip', zipCode) //stores the ZipCode
    location.replace('./results.html') // redirects to the results page
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

  if (zipCode.length === 5) {   // if the length of the zip code is 5 then store it and replace the page with the next page
    localStorage.setItem('userZip', zipCode)
    location.replace('./nopage.html')
  } else if(zipCode.length !==5) { 
    
    var instance = M.Modal.getInstance(errModal);
      instance.open();
    
      return;
  
    };
};




var getEventRepos = function(postalCode) {  //concatenating the ticketMaster url 
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

var displayEvents = function (events) {   // how we wanted to display the events
  if (events.length === 0) {
      return
  }
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


// getEventRepos();

// console.log(getEventRepos);

for (i = 0; i < 5; i++){
function getDrink() {
for (let i=0; i<10; i++) {
    let apiUrlD = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    fetch(apiUrlD)
    .then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
        storedDrinks.push(data)
        populateCards(storedDrinks);
        // execute a function you'll need to define, when ran you will pass stored drinks as an argument.
    })
    };
}
)}
populateCards(storedDrinks);
};

var populateCards = function (storedDrinks) {
  for (let j = 0; j < storedDrinks.length; j++) {
    var container = document.createElement('div');
    var containerSizing = document.createElement('div');
    var card = document.createElement('div');
    var cardImg = document.createElement('div');
    var imgContainer = document.createElement('img');
    var cardName = document.createElement('span');
    var cardContent = document.createElement('div');
    //var ingredList = document.createElement('ul');
    //var drinking = document.createElement('li');

    container.append(containerSizing);
    containerSizing.append(card);
    card.append(cardImg);
    cardImg.append(imgContainer);
    cardImg.append(cardName);
    card.append(cardContent);
    drinkStart.append(container);
    container.classList = 'row';
    containerSizing.classList = 'col s12 m7';
    card.classList = 'card';
    cardImg.classList = 'card-image';
    imgContainer.setAttribute('src', storedDrinks[j].drinks[0].strDrinkThumb);
    cardName.classList = 'card-title';
    cardContent.classList = 'card-content';


  };
};

var displayDrinks = function drinkFxn (events) {
  if (events.length === 0) {
      return
  }
  //var eventList = document.getElementById('eventList');
  //var eventEl = document.createElement('ul');
  for (var i = 0; i < events._embedded.events.length; i++) {
  var drinkL = document.createElement('li');
  var drinkUrl = document.createElement ('a');
  var pageBrk = document.createElement('br');
  drinkL.textContent = events._embedded.events[i].name
  drinkUrl.textContent = events._embedded.events[i].url
  listStart.append(drinkL);
  drinkL.append(pageBrk);
  drinkL.append(drinkUrl);
  drinkL.classList = 'orange-text collection-item';
  drinkUrl.setAttribute('target', '_blank');
  drinkUrl.setAttribute(`href`, drinktUrl.textContent);
  drinkUrl.innerHTML = drinkText;
  }
};




console.log(storedDrinks);
yesButton.on('click', yesHandler);
noButton.on('click', noHandler);
};
