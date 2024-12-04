const eyer = document.querySelector("#eyer");
const pin = document.querySelector("#pin");
const ever = document.querySelector("#ever");
const sobpin = document.querySelector("#sobpin");
var everImageTrocar = "images/olho.png";
var everImage = "images/olho (1).png";
var everImageTrocar1 = "images/olho.png";
var everImage1 = "images/olho (1).png";
eyer.addEventListener("click", function (){
    pin.type = pin.type === "password" ? "text" : "password";
    document.getElementById("everIMg").src = everImage;
    let aux = everImageTrocar
    everImageTrocar = everImage
    everImage = aux
})
ever.addEventListener("click", function (){
    sobpin.type = sobpin.type === "password" ? "text" : "password";
    document.getElementById("EverForever").src = everImage1;
    let auxi = everImageTrocar1
    everImageTrocar1 = everImage1
    everImage1 = auxi
})
