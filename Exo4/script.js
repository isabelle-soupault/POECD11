/* function remove() {
    document.getElementById('form').innerText = "";
}; */

/* let supress = document.getElementById('form').value;
function remove() {
    supress.reset();
} */

/* let resetName = document.getElementById('lastname').value;
let resetFirstName = document.getElementById('firstname').value;
let resetCity = document.getElementById('city').value;
function remove() {
    resetName.innerText = "";
    resetFirstName.innerText = "";
    resetCity.innerText = "";
}; */

let resetName = document.getElementById('lastname').value;
let resetFirstName = document.getElementById('firstname').value;
let resetCity = document.getElementById('city').value;
function remove() {
    resetName.replace(' ');
    resetFirstName.innerText = "";
    resetCity.innerText = "";
};

// replace au lieu de innerText ne fonctionne pas.


myString.replace(document.getElementById('lastname').value, '');