const eyere = document.querySelector("#eyere");
const pinc = document.querySelector("#pinc");
const evereas = document.querySelector("#eyereas");
const sobpinc = document.querySelector("#sobpinc");
var everImageTrocar = "images/olho.png";
var everImage = "images/olho (1).png";
var everImageTrocar1 = "images/olho.png";
var everImage1 = "images/olho (1).png";

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Cadastro bem-sucedido!');
            // Redirecionar para outra página ou realizar outra ação
        } else {
            errorMessage.textContent = data.message;
        }
    })
    .catch(error => {
        errorMessage.textContent = 'Ocorreu um erro. Tente novamente mais tarde.';
    });
});

eyere.addEventListener("click", function (){
    pinc.type = pinc.type === "password" ? "text" : "password";
    document.getElementById("Everelson").src = pinc.type === "password" ? everImageTrocar : everImage;
});
