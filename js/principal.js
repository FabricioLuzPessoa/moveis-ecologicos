var banners = ["Os melhores do Brasil!", "Qualidade e preço baixo!"];

var bannerAtual = 0;

function trocaBanner() {

    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector("h2#mensagem").textContent = banners[bannerAtual]; // captura um elemento h2 que tenha o id = mensagem.
}

setInterval(trocaBanner, 1000);