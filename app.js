//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//função verifica se o campo esta vazio e adiciona no array amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == ''){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        adicionarNome();
    }
    limparCampo();
}

//função mostra a lista na tela 
function adicionarNome(){
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaNomes.appendChild(item);
    }
}

//funçao sorteia um nomes da lista
function sortearAmigo(){
    
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

console.log(amigos)