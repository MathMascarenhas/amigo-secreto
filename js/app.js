let nomes = [];

function adicionar () {
    let nome = document.getElementById('nome-amigo').value;
    if (nome.length < 1) {
        alert("Escreva um nome para adicionar");
        return;
    }
    if (nomes.includes(nome)) {
        alert("Esse nome já consta na lista :(");
        return
    }
    nomes.push(nome);
    document.getElementById('lista-amigos').innerText = nomes.join(', ');
    document.getElementById('nome-amigo').value = "";
}   

function sortear () {
    if (nomes.length <= 2) {
        alert("Você precisa adicionar mais nomes a lista");
        return;
    }
    
    let drawOrder;
    let sorteioValido;

    do {
        drawOrder = [...nomes];

        for (let i = drawOrder.length - 1; i > 0; i--) {
            let randomNum = Math.floor(Math.random() * (i + 1));

            [drawOrder[i], drawOrder[randomNum]] =
                [drawOrder[randomNum], drawOrder[i]];
        }

        sorteioValido = drawOrder.every(
            (nome, i) => nome !== nomes[i]
        );

    } while (!sorteioValido);

    document.getElementById("lista-sorteio").innerText = "";

    for (let i = 0; i < nomes.length; i++) {
        document.getElementById("lista-sorteio").innerText +=
            nomes[i] + " --> " + drawOrder[i] + "\n";
    } 
}

function reiniciar () {
    nomes = [];
    document.getElementById('lista-amigos').innerText = "";
    document.getElementById('lista-sorteio').innerText = "";
}