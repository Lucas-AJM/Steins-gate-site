let etapaAtual = 1;

function proximo() {
  document.getElementById("etapa" + etapaAtual).classList.add("hidden");
  etapaAtual++;
  document.getElementById("etapa" + etapaAtual).classList.remove("hidden");
}
