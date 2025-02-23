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
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';
    if(amigos.length == 0 ){
        alert('A lista de nomes esta vazia.');
    } else {
        let quantidadeAmigos = amigos.length;
        let amigoSorteado = Math.floor((Math.random() * quantidadeAmigos));
        let sorteio = amigos[amigoSorteado];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Amigo sorteado: ${sorteio}`;
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}