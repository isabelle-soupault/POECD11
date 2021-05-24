//mouseover
let image1 = document.getElementById("image1");
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

// mouseout

image1.addEventListener('mouseout', function () {
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