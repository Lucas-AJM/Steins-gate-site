let etapaAtual = 0;
const etapas = document.querySelectorAll(".etapa");

function proximo() {
  etapas[etapaAtual].classList.add("hidden");
  etapaAtual++;

  if (etapaAtual < etapas.length) {
    etapas[etapaAtual].classList.remove("hidden");
  }
}
