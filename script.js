
let pessoas = [/* "vinicius", "Ryuk", "L", "kira", "ana", "Pikachu" */]

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
    let np = pessoas.length;
    // Math.floor: arredonda o numero para baixo
    // Math.random: gera um numero aleatorio
    let ns = Math.floor(Math.random() * np)
    document.getElementById("d").innerHTML = pessoas[ns];
    document.getElementById("mostrar").style.visibility = "visible";
}
function apagarLista() {
    pessoas = [];
    document.getElementById("lista").innerHTML = "";
}
