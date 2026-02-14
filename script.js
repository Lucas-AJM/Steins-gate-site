let etapaAtual = 0;
const etapas = document.querySelectorAll(".etapa");

// ativa a primeira etapa quando carrega
etapas[0].classList.add("ativa");

function proximo() {
  // remove a etapa atual
  etapas[etapaAtual].classList.remove("ativa");

  etapaAtual++;

  // ativa a próxima etapa se existir
  if (etapaAtual < etapas.length) {
    etapas[etapaAtual].classList.add("ativa");
  }
}
