const API = "https://localhost:7212/Usuario";

async function cadastrar(){

let usuario = {

nome: document.getElementById("nome").value,

email: document.getElementById("emailCadastro").value,

senha: document.getElementById("senhaCadastro").value
};

try{

let resposta = await fetch(API, {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify(usuario)
});

console.log(resposta);

let texto = await resposta.text();

console.log(texto);

if(resposta.ok){

alert("Cadastro realizado!");

window.location.href = "login.html";

}else{

alert(texto);
}

}catch(erro){

console.log(erro);

alert("Erro ao conectar com API");
}
}
