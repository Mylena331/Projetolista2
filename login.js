const API = "https://localhost:7212/Usuario"

async function login(){

let usuario = {

email: document.getElementById("emailLogin").value,
nome:"",
senha: document.getElementById("senhaLogin").value
};

console.log(usuario);

try{

let resposta = await fetch(`${API}/login`, {

method: "POST",

headers: {
"Content-Type": "application/json"
},
credentials:"include",
body: JSON.stringify(usuario)
});

if(resposta.ok){

alert("Login realizado!");

window.location.href = "index.html";

}else{

alert("Email ou senha incorretos!");
}

}catch(erro){

alert("Erro ao conectar com API");
}
}
