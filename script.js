let smallImg = document.getElementsByClassName("small-img");
let mainImg = document.getElementById("main-img");

smallImg[0].onClick = function () {
    mainImg.src = smallImg[0].src
}
smallImg[1].onClick = function () {
    mainImg.src = smallImg[1].src
}
smallImg[2].onClick = function () {
    mainImg.src = smallImg[2].src
}
smallImg[3].onClick = function () {
    mainImg.src = smallImg[3].src
}