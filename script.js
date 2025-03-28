document.addEventListener("DOMContentLoaded", () => {
    const telaInicial = document.getElementById("tela-inicial");
    const conteudo = document.getElementById("conteudo");
    const descobrirBtn = document.getElementById("descobrir");
    const musica = document.getElementById("musica");
    const imagem = document.getElementById("imagem");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    // Lista de imagens (coloque os nomes das suas imagens aqui)
    const imagens = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
    let indexAtual = 0;

    // Mostra a página principal ao clicar no botão
    descobrirBtn.addEventListener("click", () => {
        telaInicial.style.display = "none";
        conteudo.classList.remove("hidden");
        musica.play(); // Toca a música automaticamente
    });

    // Navegação entre imagens
    prevBtn.addEventListener("click", () => {
        indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
        imagem.src = `img/${imagens[indexAtual]}`;
    });

    nextBtn.addEventListener("click", () => {
        indexAtual = (indexAtual + 1) % imagens.length;
        imagem.src = `img/${imagens[indexAtual]}`;
    });
});
