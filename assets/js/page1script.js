var button = document.getElementById('submitYes');

/* var relocate = function relocate() {
    window.location.replace("index2.html");
}; */

button.addEventListener('click', function relocate (event){
    event.preventDefault();
    window.location.replace("results.html");
});

