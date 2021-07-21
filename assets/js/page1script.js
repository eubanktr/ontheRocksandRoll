var enter = document.querySelector('postalCode');

enter.addEventListener('keydown', function(event){
    event.preventDefault();
    window.location.replace("index2.html")
})