/* //mouseover
image1.addEventListener('mouseover', function () {
    image1.src = "images/image1_2.jpg";
})
image2.addEventListener('mouseover', function () {
    image2.src = "images/image2_2.jpg";
})
image3.addEventListener('mouseover', function () {
    image3.src = "images/image3_2.jpg";
})
image4.addEventListener('mouseover', function () {
    image4.src = "images/image4_2.jpg";
})
image5.addEventListener('mouseover', function () {
    image5.src = "images/image5_2.jpg";
})

// mouseout


image1.src = "images/image1.jpg";
})
image2.addEventListener('mouseout', function () {
    image2.src = "images/image2.jpg";
})
image3.addEventListener('mouseout', function () {
    image3.src = "images/image3.jpg";
})
image4.addEventListener('mouseout', function () {
    image4.src = "images/image4.jpg";
})
image5.addEventListener('mouseout', function () {
    image5.src = "images/image5.jpg";
})
 */

// Bonus, ne faire que 2 fonctions pour cet exercice

// mouseover
function changeImg(imgNumber) {
    switch (imgNumber) {
        case 1: image1.src = "images/image1_2.jpg";
            break;
        case 2: image2.src = "images/image2_2.jpg";
            break;
        case 3: image3.src = "images/image3_2.jpg";
            break;
        case 4: image4.src = "images/image4_2.jpg";
            break;
        case 5: image5.src = "images/image5_2.jpg";
            break;

    };
}
image1.addEventListener('mouseover', function () {
    changeImg(1)
});
image2.addEventListener('mouseover', function () {
    changeImg(2)
});
image3.addEventListener('mouseover', function () {
    changeImg(3)
});
image4.addEventListener('mouseover', function () {
    changeImg(4)
});
image5.addEventListener('mouseover', function () {
    changeImg(5)
});

// mouseout

function returnImg(imgNumber) {
    switch (imgNumber) {
        case 1: image1.src = "images/image1.jpg";
            break;
        case 2: image2.src = "images/image2.jpg";
            break;
        case 3: image3.src = "images/image3.jpg";
            break;
        case 4: image4.src = "images/image4.jpg";
            break;
        case 5: image5.src = "images/image5.jpg";
            break;

    };
}
image1.addEventListener('mouseout', function () {
    returnImg(1)
});
image2.addEventListener('mouseout', function () {
    returnImg(2)
});
image3.addEventListener('mouseout', function () {
    returnImg(3)
});
image4.addEventListener('mouseout', function () {
    returnImg(4)
});
image5.addEventListener('mouseout', function () {
    returnImg(5)
});


//________________________//
//                        //
//      CORRECTION        //
//________________________//

/*

let images = document.querySelectorAll('img');
image.forEach(image =>{
    image.addEventListener('mouseover', ()=> image.src = 'images/' + image.id +_2.jpg);
});

images.forEach(image =>{
    image.addEventListener('mouseout', () => image.src = 'images/' + '.jpg')
});

*/