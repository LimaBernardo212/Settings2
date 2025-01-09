document.querySelector("#registerForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir comportamento padrão do formulário
    const pin = document.getElementById("pinc").value; // string
    const name = document.getElementById("username").value; // string
    const email = document.getElementById("email").value; // string

 
    const mongodb = require('mongodb').MongoClient;
    const url = 'mongodb+srv://bernardolimarodrigues4:qXNquEiMlFAirlGS@cluster0.oh6r1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // string
    mongodb.connect(url, (erro, banco) => {
        if (erro) throw erro;
        const dbo = banco.db("Usuario");
        const obj = { senha: "A senha é " + pin, nome: "O nome é " + name, email: "O email é " + email }; // objeto
        const col = "UserData"; // string
        dbo.collection(col).insertOne(obj, (erro, resultado) => {
            if (erro) throw erro;
            console.log("Inserido com sucesso");
            banco.close();
        });
    });
});

