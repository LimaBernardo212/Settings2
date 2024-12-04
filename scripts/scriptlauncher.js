var version = document.getElementById("#versionas");
var att = document.getElementById("#atu");
var final = document.getElementById("#final");

var numb = 0.1;
function number(){
    numb += 0.1
    version.innerText = `${numb}`
}