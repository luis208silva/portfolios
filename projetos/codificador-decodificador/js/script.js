/**compiando texto */
var btnCopiar = document.querySelector(".btn-copiar");

btnCopiar.onclick = function() {
    resultado.select();
    document.execCommand("copy");
    inputTexto.value = "";
    inputTexto.focus();
    resultado.textContent = "";
    btnCopiar.classList.add("invisivel");
}

/***criptografando o texto */
function codifica(texto) {
    var caracteres = texto.value.split("");

    caracteres.forEach(function(item, i) {
        if(item == "a") {
            caracteres[i] = "ai";

        } else if(item == "e") {
            caracteres[i] = "enter";

        } else if(item == "i") {
            caracteres[i] = "imes";

        } else if(item == "o") {
            caracteres[i] = "ober";

        } else if(item == "u") {
            caracteres[i] = "ufat";
        }
    })
    return caracteres.join("");
}

function decodifica(texto) {
    var codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.value;

    for(var i = 0; i < codigo.length; i++) {
        if(texto.includes(codigo[i][1])) {
            texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return texto;
}

function escreveCodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");
    
    resultado.textContent = codifica(inputTexto);
}

function escreveDecodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");

    resultado.textContent = decodifica(inputTexto);
}

var inputTexto = document.querySelector(".input-texto");
var resultado = document.querySelector(".resultado");

var btnCodificar = document.querySelector(".btn-codificar");
var btnDecodificar = document.querySelector(".btn-decodificar");

var mensagensErro = document.querySelector(".mensagens-erro");

btnCodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }

    escreveCodificado();
    mensagensErro.innerHTML = "";
}

btnDecodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }
    
    escreveDecodificado();
    mensagensErro.innerHTML = "";
}

/****validando o texto */
function validaTexto(texto) {
    var erros = [];

    if(texto.value == 0) erros.push(" Digite o texto desejado!");

    if(/[A-Z-À-Ú-à-ú]/.test(texto.value)) erros.push(" Apenas letras minúsculas e sem acento!");

    return erros;
}

function mostraErros(erros) {
    var ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    
}