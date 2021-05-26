let lossfocus = document.getElementById('lastname');

lossfocus.onblur = messageThx;
function messageThx() {
    alert('Merci de votre participation');
}

//________________________//
//                        //
//      CORRECTION        //
//________________________//

/*
perte de focus = quand on n'est plus sur le champ
différence entre blur et onblur


let lossfocus = document.getElementById('lastname');
inputLastName.addEventListener('blur', () => alert('Merci de votre participation'));

*/