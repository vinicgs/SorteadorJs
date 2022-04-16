
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
    let quantos = document.getElementById("qtd").innerHTML;
    //se o valor for diferente de 1 
    if (quantos == 1) {
        let np = pessoas.length;
        // Math.floor: arredonda o numero para baixo// Math.random: gera um numero aleatorio
        let ns = Math.floor(Math.random() * np)
        document.getElementById("d").innerHTML = pessoas[ns];
    } else {
        for (let i = 0; i < pessoas.length; i++) {
            let np = pessoas.length;
            let ns = Math.floor(Math.random() * np)
            document.getElementById("d").innerHTML = pessoas[ns];
            document.getElementById("d").innerHTML = pessoas.join(" | ");
        }
    }
    document.getElementById("mostrar").style.visibility = "visible";
}

function apagarLista() {
    pessoas = [];
    document.getElementById("lista").innerHTML = "";
}