let etapaAtual = 0;
const etapas = document.querySelectorAll(".etapa");

etapas[0].classList.add("ativa");

function proximo() {
  etapas[etapaAtual].classList.remove("ativa");
  
  etapaAtual++;

  if (etapaAtual < etapas.length) {
    etapas[etapaAtual].classList.add("ativa");
  }
}
