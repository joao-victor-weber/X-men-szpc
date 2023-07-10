const pers = document.querySelectorAll(".per");
pers.forEach(per => {
    per.addEventListener("mouseenter", () => {
        if(window.innerWidth<450){
            window.scrollTo({top :0, behavior: 'smooth'});
        }
        removerSelecaoDoPresomagem();
        per.classList.add("selec");
        mudarImagemDoPersonagemSelecionado(per);
        mudarNomeDoPersonagem(per);
        mudarDiscricaoDoPersonagem(per);
    })
})
function mudarDiscricaoDoPersonagem(per) {
    const dPer = document.getElementById("descricao-per");
    dPer.innerText = per.getAttribute("data-description");
}

function mudarNomeDoPersonagem(per) {
    const nPer = document.getElementById("nome-per");
    nPer.innerText = per.getAttribute("data-name");
}

function mudarImagemDoPersonagemSelecionado(per) {
    const imgPerG = document.querySelector(".per-grande");
    const idPer = per.attributes.id.value;
    imgPerG.src = `./src/img/card-${idPer}.png`;
}

function removerSelecaoDoPresomagem() {
    const perC = document.querySelector(".selec");
    perC.classList.remove("selec");
}

