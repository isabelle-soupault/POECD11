/* let image1 = document.getElementById("image1");
image1.addEventListener('mouseover', function () {
    image1.src = "images/image1_2.jpg";
})
let image2 = document.getElementById("image2");
image2.addEventListener('mouseover', function () {
    image2.src = "images/image2_2.jpg";
})
let image3 = document.getElementById("image3");
image3.addEventListener('mouseover', function () {
    image3.src = "images/image3_2.jpg";
})
let image4 = document.getElementById("image4");
image4.addEventListener('mouseover', function () {
    image4.src = "images/image4_2.jpg";
})
let image5 = document.getElementById("image5");
image5.addEventListener('mouseover', function () {
    image5.src = "images/image5_2.jpg";
})
 */

//bonus - faire ça en une seule fonction


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
// ici ça marche, mais il y a une répétition et on veut autant que possible éviter ces répétitions


/*     image2.addEventListener('mouseover', changeImg);
    image3.addEventListener('mouseover', changeImg);
    image4.addEventListener('mouseover', changeImg);
    image5.addEventListener('mouseover', changeImg); */


/*     image1.src = "images/image1_2.jpg";
image2.src = "images/image2_2.jpg";
image3.src = "images/image3_2.jpg";
image4.src = "images/image4_2.jpg";
image5.src = "images/image5_2.jpg"; */




/* image.addEventListener('mouseover', function () {
    image1.src = "images/image1_2.jpg";
    image2.src = "images/image2_2.jpg";
    image3.src = "images/image3_2.jpg";
    image4.src = "images/image4_2.jpg";
    image5.src = "images/image5_2.jpg";

});
 */

/* let image1 = document.getElementById("image1");
if ('mouseover') {
    image1.src = "images/image1_2.jpg";
} else {
    image1.src = "images/image1.jpg";
}
 */

/* let imgMouseover = document.querySelector('img');
imgMouseover.forEach('mouseover', function (imgMouseover) {
    image1.src = "images/image1_2.jpg";
    image2.src = "images/image2_2.jpg";
    image3.src = "images/image3_2.jpg";
    image4.src = "images/image4_2.jpg";
    image5.src = "images/image5_2.jpg";
}); */

//________________________//
//                        //
//      CORRECTION        //
//________________________//

/*

const changeImage = ()=> this.src="images/image" + this.id + "_2.jpg";
function changeImage(){
    this.src="images/"
}
for (let i=0; i < images.lenght; i++){
    images[i].addEventListener('mouseover', changeImage);
}

*/