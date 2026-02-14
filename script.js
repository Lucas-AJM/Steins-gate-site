function entrar() {
    document.getElementById("tela1").classList.add("hidden");
    document.getElementById("tela2").classList.remove("hidden");
}

function surpresa() {
    document.getElementById("mensagemFinal").classList.remove("hidden");
    criarCoracoes();
}

function criarCoracoes() {
    setInterval(() => {
        let coracao = document.createElement("div");
        coracao.innerHTML = "❤️";
        coracao.style.position = "absolute";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = "100vh";
        coracao.style.fontSize = "24px";
        coracao.style.animation = "subir 4s linear forwards";
        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 4000);
    }, 300);
}
