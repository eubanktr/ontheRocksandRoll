let listStart = document.getElementById('list-start') //linking to the index
var storedDrinks = [];
var backButton = $('#backButton'); //linking a button the the index
const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";
var eventNum = 100;
let drinkStart = document.getElementById('drink-start');
let buttonSel = localStorage.getItem('buttonId')
var bummerModal = document.getElementById('modal2')

const zipInput = localStorage.getItem('userZip');

/*$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "gin": null,
        "vodka": null,
        "rum": 'https://placehold.it/250x250'
      },
    });
  });*/
     

document.addEventListener('DOMContentLoaded', function() {
    M.Modal.init(bummerModal);
});
 
var getEventRepos = function(postalCode) {     //making the postal code function
    var apiUrl = ticketMasterUrl + '.json?postalCode=' + postalCode + '&size=' + eventNum + '&apikey=' + ticketMasterKey;  //concatenating parts of the API url

    fetch(apiUrl) 
    .then(function (response) {
        if (response.ok) { //making sure we get a valid response
            response.json().then(function (data) {
                displayEvents(data, postalCode);  //displaying the postal code 
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
if (events.page.totalElements === 0) {
    // Create dynamic container to display "No events found in + zipCode"
    var instance = M.Modal.getInstance(bummerModal);
    instance.open();
    return;
}

  // Dynamic container created 4 lines above displays events in the area.

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
    eventL.setAttribute('id', 'borderBot')
    infoIcon.classList = 'tiny material-icons';
    eventUrl.setAttribute('target', '_blank');
    eventUrl.setAttribute(`href`, eventUrl.textContent);
    eventUrl.innerHTML = eventText;
    infoIcon.innerHTML = icon;
    }
};

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
                var cardPara = document.createElement('h6');
                var cardLink = document.createElement('a');
                var aBrk = document.createElement('br');
                var paraBrk = document.createElement('br');
                var drink = data.drinks[0].strDrink;
                var splitDrink = drink.split(' ');
                var joinDrink = splitDrink.join('-');

                container.append(containerSizing);
                containerSizing.append(card);
                card.append(cardImg);
                cardImg.append(imgContainer);
                cardImg.append(cardName);
                card.append(cardContent);
                cardContent.append(cardPara);
                cardContent.append(cardAction);
                cardAction.append(cardLink);
                cardAction.append(aBrk);
                drinkStart.append(container);
                cardPara.append(paraBrk);
                
                container.classList = 'row';
                containerSizing.classList = 'col s12 m7';
                card.classList = 'card';
                cardImg.classList = 'card-image';
                imgContainer.setAttribute('src', data.drinks[0].strDrinkThumb);
                cardLink.classList = 'col center';
                cardLink.setAttribute('href', 'https://www.thecocktaildb.com/drink/' + data.drinks[0].idDrink + '-' + joinDrink);
                cardLink.setAttribute('target' , '_blank');
                cardLink.innerHTML = "<span style= 'text-align:left'>Click here for the ingredients!</span>";
                cardName.classList = 'card-title';
                cardContent.classList = 'card-content';
                cardAction.classList = 'card-action';
                cardPara.classList = 'center';
                cardPara.innerHTML = data.drinks[0].strDrink;
            
            // localStorage.setItem('drinksArr', storedDrinks) // execute a function you'll need to define, when ran you will pass stored drinks as an argument.
        
        })
        };
    }
    );
    
    };
    // var drinksArr = localStorage.getItem('drinksArr');
    // JSON.stringify(drinksArr);
    


    //     };
    //     };


for (let i = 0; i < 8; i++) {
    getDrink();
};
// M.Modal.getInstance(bummerModal).open()

getEventRepos(zipInput);
