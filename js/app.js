let nomes = [];

function adicionar () {
    let nome = document.getElementById('nome-amigo').value;
    nomes.push(nome);
    document.getElementById('lista-amigos').innerText = nomes.join(', ');
}   

function sortear () {
    let drawOrder = [];
    for (let i = 0; i < nomes.length; i++) {
        let randomNum = Math.floor(Math.random() * nomes.length);
        while (randomNum == i || drawOrder.includes(nomes[randomNum])) {
            randomNum = Math.floor(Math.random() * nomes.length);
        }
        drawOrder.push(nomes[randomNum])
        document.getElementById('lista-sorteio').innerText += (nomes[i]) + "-->" + drawOrder[i] + "\n"
    }
    drawOrder = [];
}

function reiniciar () {
    nomes = [];
    document.getElementById('lista-amigos').innerText = ""
    document.getElementById('lista-sorteio').innerText = ""
}