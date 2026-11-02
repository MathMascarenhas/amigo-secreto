let nomes = [];

function adicionar () {
    let nome = document.getElementById('nome-amigo').value;
    nomes.push(nome);
    document.getElementById('lista-amigos').innerText = nomes.join(', ');
}   