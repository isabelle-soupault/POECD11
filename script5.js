/* document.addEventListener("submit", function () {
    let firstNumber = Math.trunc(document.getElementById('firstNumber').value);
    let secondNumber = document.getElementById('secondNumber').value);

alert(firstNumber * secondNumber);

});

Manque la gestion des chiffre entiers*/

/* if (Number.isInteger(firstNumber)) {
    alert('Le premier chiffre doit obligatoirement être un choffre à virgule')
} else {
    alert('super !)')
};
 */

/* if ((parseFloat(firstNumber) == parseInt(firstNumber)) && !isNaN(firstNumber)) {
    alert("firstNumber est un entier");
} else {
    alert("firstNumber n'est pas un entier");
}; */

document.addEventListener("submit", function () {
    if (isNaN(firstNumber.value) == true) {
        alert('Le premier champ doit contenir des chiffres exclusivement');
    }
    else if (isNaN(secondNumber.value) == true) {
        alert('Le second champ doit contenir des chiffres exclusivement');
    } else if (Number.isInteger(parseFloat(firstNumber.value))) {
        alert('Votre premier chiffre doit contenir des chiffres après la virgule :)');

    } else if (Number.isInteger(parseFloat(secondNumber.value))) {
        alert('Votre second chiffre doit contenir des chiffres après la virgule :)');

    } else {
        let result = Math.trunc(firstNumber.value) * secondNumber.value;
        alert(result);
    }

    /*     else if (!Number.isInteger(secondNumber.value)) {
            alert('Votre second chiffre doit contenir des chiffres ET une virgule')
        } else {
            alert('Vos chiffres sont bien saisis !');
        }; */
});


//________________________//
//                        //
//      CORRECTION        //
//________________________//

/*

Manipulation du DOM.
1 - Rajouter dans le HTML un <p> <span> </span> </p>
2 - Modifier mon else de la sorte:
        - let result devient const result
        - let displaySpan = document.getElementById('result");
        - let strongElement = document.createElement('strong');
        - strongElement.innerText = `Résultat : ${result};
        - displaySpan.appendChild(strongElement);


Ici, le strongElement va créer un élément strong dans mon DOM.
Ensuite, le strongElement.innerText va indiquer le contenu qu'on souhaite récupérer.
Et pour finit le displaySpan.appendChild(strongElement); va dire où on affiche exactement le contenu.

/*