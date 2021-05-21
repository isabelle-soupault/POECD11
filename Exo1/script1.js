/* function changeImage(n) {

    switch (n) {

        case 1:
            document.getElementById("image1").src = "images/image1.jpg";
            break;

        case 2:
            document.getElementById("image2").src = "images/image1_2.jpg";
            break;
    }
}

function backImage(n) {
    switch (n) {

        case 1:
            document.getElementById("image1").src = "images/image1.jpg";
            break;

        case 2:
            document.getElementById("image2").src = "images/image1_2.jpg";
            break;
    }
} */
/* 
let img = document.querySelector('img');
let start = img.src;
let hover = img.getAttribute('data-hover'); //specified in img tag

img.onmouseover = () => { img.src = hover; }
img.onmouseout = () => { img.src = start; } //to revert back to start */

let image = document.getElementById("image1");
image.addEventListener('mouseover', function () {
    image.src = "images/image1_2.jpg";
})
/* image.addEventListener('mouseout', function () {
    image.src = "images/image1.jpg";
}); */