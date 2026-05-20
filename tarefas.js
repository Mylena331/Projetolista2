const API = "https://localhost:7212/Tarefa/Cadastrar";

async function salvarTarefa(){

let tarefa = {

descricao: document.getElementById("descricao").value,

status: document.getElementById("status").value
};

let resposta = await fetch(`${API}`, {

method: "POST",

headers: {
"Content-Type": "application/json"
},

credentials: 'include',
body: JSON.stringify(tarefa)
});

if(resposta.ok){

alert("Tarefa adicionada!");

document.getElementById("descricao").value = "";
}
}
