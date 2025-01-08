const eyere = document.querySelector("#eyere");
const pinc = document.querySelector("#pinc");
const evereas = document.querySelector("#eyereas");
const sobpinc = document.querySelector("#sobpinc");
var everImageTrocar = "images/olho.png";
var everImage = "images/olho (1).png";
var everImageTrocar1 = "images/olho.png";
var everImage1 = "images/olho (1).png";
document.getElementById('loginc').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('name').value;
    const password = document.getElementById('pinc').value;
    const errorMessage = document.getElementById('Error');
    // Usuário e senha de exemplo
    const validUsername = 'Bernardo Lima';
    const validPassword = '12345678';

    if (username === validUsername && password === validPassword) {
        window.alert('Seja bem-vindo, ' + username + '!')
        window.location.href = 'entreEmContato.html';
       
        // Redirecionar para outra página ou realizar outra ação
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
});
eyere.addEventListener("click", function (){
    pinc.type = pinc.type === "password" ? "text" : "password";
    document.getElementById("Everelson").src = everImage;
    let aux = everImageTrocar
    everImageTrocar = everImage
    everImage = aux
})
