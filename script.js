let smallImg = document.getElementsByClassName("small-img");
let mainImg = document.getElementById("main-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
        mainImg.src = smallImg[i].src;
    };
}
