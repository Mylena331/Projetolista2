const API = "https://localhost:7212/api";

async function carregarTarefas(){

let resposta = await fetch(`${API}/tarefas`, {

method: "GET",

credentials: 'include'
});

let tarefas = await resposta.json();

let lista = document.getElementById("lista");

lista.innerHTML = "";

tarefas.forEach(tarefa => {

lista.innerHTML += `

<div class="tarefa">

<p>
<strong>Descrição:</strong>
${tarefa.descricao}
</p>

<p>
<strong>Status:</strong>
${tarefa.status}
</p>

<button onclick="editar(${tarefa.id})">
Atualizar
</button>

<button onclick="deletar(${tarefa.id})">
Deletar
</button>

</div>
`;
});
}

async function deletar(id){
await fetch(`${API}/tarefas/${id}`, {
method: "DELETE",
credentials: 'include'
});

carregarTarefas();
}

async function editar(id){

let novaDescricao = prompt("Nova descrição:");

let novoStatus = prompt("Novo status:");

let tarefa = {

descricao: novaDescricao,

status: novoStatus
};

await fetch(`${API}/tarefas/${id}`, {

method: "PUT",

headers: {
"Content-Type": "application/json"
},

credentials: 'include',

body: JSON.stringify(tarefa)
});

carregarTarefas();
}

carregarTarefas();
