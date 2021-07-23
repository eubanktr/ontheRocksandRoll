let listStart = document.getElementById('list-start') //linking to the index
var storedDrinks = [];
var backButton = $('#backButton'); //linking a button the the index
const ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events";
const ticketMasterKey = "tNq308PJQ4YjlzGPiveVZXsWOYlMDGth";
var eventNum = 20;
let drinkStart = document.getElementById('drink-start');
<<<<<<< HEAD
let buttonSel = localStorage.getItem('buttonId');
var bummerModal = document.getElementById('modal2');
var errModal = document.getElementById('modal1');
console.log(buttonSel);
=======
let buttonSel = localStorage.getItem('buttonId')
var bummerModal = document.getElementById('modal2');
console.log(buttonSel)
// document.addEventListener('DOMContentLoaded', function() {
//     M.Modal.init(bummerModal);
// });
>>>>>>> 381a5427f4f60bfa38d7211d4ab2f3ce5ec0fd28



const zipInput = localStorage.getItem('userZip') // getting the Zipcode
document.addEventListener('DOMContentLoaded', function() {
    M.Modal.init(bummerModal);
});

console.log(zipInput) 
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


var displayEvents = function (events) {   // how we wanted to display the events: in an unordered list
    if (events.length === undefined) {
        var instance = M.modal.getInstance(bummerModal);
        instance.open();
        return;
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
                cardLink.setAttribute('href', 'https://www.google.com/search?q=' + data.drinks[0].strDrink + '+ingredients');
                cardLink.setAttribute('target' , '_blank');
                cardLink.innerHTML = 'Click here for the ingredients!';
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
// M.Modal.getInstance(bummerModal).open()

getEventRepos(zipInput)

