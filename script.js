
let pessoas = ["vinicius", "maria", "joao", "jose", "pedro", "nome", "teste", "nada", "tudo", "coisas"];

function addNome() {
    let listaNome = document.getElementById("nome").value;
    // joga o nome no array
    // somente se não estiver vazio
    if (listaNome != "") {
        pessoas.push(listaNome);
        document.getElementById("nome").value = "";
    } else alert("Digite um nome!");

    //limpa o campo
    document.getElementById("nome").value = "";
    //cursor fica no campo depois de limpar
    document.getElementById("nome").focus();
    console.log(pessoas);

    document.getElementById("lista").innerHTML = pessoas.join(" | ");
    document.getElementById("nParticipantes").innerHTML = pessoas.length;
}



function sortear() {
    //get value from input
    let quantos = document.getElementById("numero").value;

    //se o valor for = 0
    if (quantos == 0) {
        let np = pessoas.length;
        // Math.floor: arredonda o numero para baixo// Math.random: gera um numero aleatorio
        let ns = Math.floor(Math.random() * np)
        document.getElementById("d").innerHTML = pessoas[ns];

    } else if (quantos > pessoas.length) {
        alert("Numero de sorteados maior que o numero de participantes!");
    } else {
        //sorteia quantos participantes foram selecionados sem repetir
        let sorteados = [];
        while (sorteados.length < quantos) {
            let np = pessoas.length;
            let ns = Math.floor(Math.random() * np);
            if (sorteados.indexOf(ns) == -1) {
                sorteados.push(ns);
            }
        }
        document.getElementById("d").innerHTML = pessoas[sorteados[0]];
        for (let i = 1; i < sorteados.length; i++) {
            document.getElementById("d").innerHTML += " | " + pessoas[sorteados[i]];
        }
    }
}

function apagarLista() {
    pessoas = [];
    document.getElementById("lista").innerHTML = "";
}