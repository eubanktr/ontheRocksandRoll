const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";
var eventNum = 20;
let listStart = document.getElementById('list-start')
let drinkStart = document.getElementById('drink-start');
let buttonSel = localStorage.getItem('buttonId')
console.log(buttonSel)


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
    eventL.classList = 'orange-text collection-item';
    infoIcon.classList = 'tiny material-icons';
    eventUrl.setAttribute('target', '_blank');
    eventUrl.setAttribute(`href`, eventUrl.textContent);
    eventUrl.innerHTML = eventText;
    infoIcon.innerHTML = icon;
    }
}
function getDrink() {
    
        let apiUrlD = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        fetch(apiUrlD)
        .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var container = document.createElement('div');
                var containerSizing = document.createElement('div');
                var card = document.createElement('div');
                var cardImg = document.createElement('div');
                var imgContainer = document.createElement('img');
                var cardName = document.createElement('span');
                var cardContent = document.createElement('div');
                var cardAction = document.createElement('div');
                var cardPara = document.createElement('p');
                var cardLink = document.createElement('a');
                var paraBrk = document.createElement('br');
                var paraApol = document.createElement('p');
    
                
                container.append(containerSizing);
                containerSizing.append(card);
                card.append(cardImg);
                cardImg.append(imgContainer);
                cardImg.append(cardName);
                card.append(cardContent);
                cardContent.append(cardPara);
                cardContent.append(cardAction);
                cardAction.append(cardLink);
                drinkStart.append(container);
                cardPara.append(paraBrk);
                
                container.classList = 'row';
                containerSizing.classList = 'col s12 m7';
                card.classList = 'card';
                cardImg.classList = 'card-image';
                imgContainer.setAttribute('src', data.drinks[0].strDrinkThumb);
                cardLink.setAttribute('href', 'https://www.google.com');
                cardLink.innerHTML = 'We apoligize for the inconvenience, we are unable to populate the ingredients for you. Click here to google the recipe.';
                cardName.classList = 'card-title';
                cardContent.classList = 'card-content';
                cardAction.classList = 'card-action';
                cardName.innerHTML = data.drinks[0].strDrink;
                cardPara.innerHTML = data.drinks[0].strInstructions;
            
            // localStorage.setItem('drinksArr', storedDrinks) // execute a function you'll need to define, when ran you will pass stored drinks as an argument.
        
        })
        };
    }
    );
    
    };
    // var drinksArr = localStorage.getItem('drinksArr');
    // JSON.stringify(drinksArr);
    // console.log(drinksArr);


    //     };
    //     };


for (let i = 0; i < 8; i++) {
    getDrink();
};

getEventRepos(zipInput)

