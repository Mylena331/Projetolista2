document.addEventListener("DOMContentLoaded", function () {

    fetch('https://localhost:7212/tarefa/atividade/', {
        credentials: "include"
    })

    .then(response => response.json())

    .then(data => {

        console.log(data);

        var resposta = document.getElementById("lista");

        resposta.innerHTML = "<h4>Segue Lista de Tarefas</h4>";

       for (let i = 0; i < data.length; i++) {

    resposta.innerHTML += `
   
    <div>

        Tarefa:
       
        <input
            type="text"
            id="Descricao${data[i].tarefa}"
            value="${data[i].descricao}"
        >

        status:

        <input
            type="text"
            id="Status${data[i].tarefa}"
            value="${data[i].status}"
        >

        <button onclick="apagarTarefa(${data[i].tarefa})">
            apagar
        </button>

        <button onclick="editarReserva(${data[i].tarefa})">
            editar
        </button>

    </div>
   
    `;
}

        var nome = document.getElementById("nome");
        nome.innerHTML = "Olá " + data[0].pessoa +
        "    ";

    });

});

function apagarTarefa(id) {

    console.log(id);

    fetch('https://localhost:7212/tarefa/Deletar/' + id, {

        method: "DELETE",
        credentials: "include"

    })

    .then(async response => {

        console.log(response.status);

        const texto = await response.text();

        console.log(texto);

        if(response.ok){
            location.reload();
        }

    })

    .catch(error => console.log(error));

}



function editarReserva(idTarefa) {
console.log(idTarefa);
    fetch('https://localhost:7212/tarefa/Atualizar/' + idTarefa, {

        method: 'PUT',

        credentials: 'include',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({

            descricao: document.getElementById("Descricao"+idTarefa).value,
            status:  document.getElementById("Status"+idTarefa).value

        }),

    })

    .then(response => response.text())

 

}

function logout() {
    fetch('https://localhost:7212/pessoa/logout/', {
        credentials: 'include' })
        .then(response => {
            console.log(response);
            window.location.href = "login.html"
        })
}