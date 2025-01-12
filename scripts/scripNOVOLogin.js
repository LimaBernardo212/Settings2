const eyere = document.querySelector("#eyere");
const pinc = document.querySelector("#pinc");
const evereas = document.querySelector("#eyereas");
const sobpinc = document.querySelector("#sobpinc");
var everImageTrocar = "images/olho.png";
var everImage = "images/olho (1).png";
var everImageTrocar1 = "images/olho.png";
var everImage1 = "images/olho (1).png";
eyere.addEventListener("click", function (){
    pinc.type = pinc.type === "password" ? "text" : "password";
    document.getElementById("Everelson").src = everImage;
    let aux = everImageTrocar
    everImageTrocar = everImage
    everImage = aux
})


