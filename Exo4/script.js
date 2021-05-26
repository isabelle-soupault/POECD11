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

/* let resetName = document.getElementById('lastname').value;
let resetFirstName = document.getElementById('firstname').value;
let resetCity = document.getElementById('city').value; */
function remove() {
    document.getElementById('lastname').value = ('');
    document.getElementById('firstname').value = ('');
    document.getElementById('city').value = ('');
    /*   resetName.replace(' ');
      resetFirstName.innerText = "";
      resetCity.innerText = ""; */
};

// replace au lieu de innerText ne fonctionne pas.


// myString.replace(document.getElementById('lastname').value, '');

//________________________//
//                        //
//      CORRECTION        //
//________________________//

/*
let button = document.querySelector('button');
button.addEventListener('click', restForm);
function restForm(){
    let inputs = document.getElementsByTagName('input');
    for (i =0, 1< imputs.lengh; i++){
        document.getElementsById('form')[i].value= '';
    }
}

Autre solution

let button = document.querySelector('button');
button.addEventListener('click', function(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(elt =>{
        elt.value='';
    });
});

*/