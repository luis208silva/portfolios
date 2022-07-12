const tecnologia = [
    "java", "react", "node", "python", "php"
];

const palavraSecreta = tecnologia[Math.floor(Math.random() * tecnologia.length)];
const letrasErrada = [];
const letraCorreta = [];

document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode; //64 - 90 (intervalo de codigo)
    if (isLetra(codigo)) {
        const letra = evento.key;

        //começando com letra errada
        if (letrasErrada.includes(letra)) {
            mostrarAvisoLetraRepetida();
        }else{
            if (palavraSecreta.includes(letra)) {
                letraCorreta.push(letra);
            }else{
                letrasErrada.push(letra);
            }
        }

        //atualizar o jogo
        atualizarJogo();
    }
})

function atualizarJogo() {
    mostraLetrasErradas();  
    mostraLetrasCorretas();  
    desenharForca();
    checarStatusJogo();
}

function checarStatusJogo() {
    let mensagem = "";
    let erro = "";
    let erro1 = "";
    const container = document.querySelector(".palavra-secreta-container");
    const pasrtesDoCorpo = document.querySelectorAll(".forca-parte");
    if (letrasErrada.length === pasrtesDoCorpo.length) {
        mensagem = `<img src='img/gover.gif'>`;
        erro1 = "Voçê errou!!!";
    }

    if (palavraSecreta === container.innerText) {
        mensagem = `<img src='img/gwin.gif'>`;
        erro = "Voçê ganhou!!!";
    }

    if (mensagem) {
        document.querySelector("#mensagem").innerHTML = mensagem;
        document.querySelector("#erro").innerHTML = erro;
        document.querySelector("#erro1").innerHTML = erro1;
        document.querySelector(".popup-container").style.display = "flex";
    }
}

function desenharForca() {
    const pasrtesDoCorpo = document.querySelectorAll(".forca-parte");
    for (let i = 0; i < letrasErrada.length; i++) {
        pasrtesDoCorpo[i].style.display = "none";
    }
}

function mostraLetrasCorretas() {
    const container = document.querySelector(".palavra-secreta-container");
    container.innerHTML = "";
    palavraSecreta.split("").forEach(letra => {
        if (letraCorreta.includes(letra)) {
            container.innerHTML += `<span>${letra}</span>`;
        }else{
            container.innerHTML += `<span>_</span>`;
        }
    })
}

function mostraLetrasErradas() {
    const div = document.querySelector(".letras-erradas-container");
    div.innerHTML = "<h3>Letras erradas</h3>";
    letrasErrada.forEach(letra => {
        div.innerHTML += `<span>${letra}</span>`;
    })
}

function mostrarAvisoLetraRepetida() {
    const aviso = document.querySelector(".aviso-palavra-repetida");
    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");
    }, 10000);
}

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo() {
    window.location.reload();
}


