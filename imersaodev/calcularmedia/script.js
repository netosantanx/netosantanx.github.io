const calcButton = document.getElementById("calcButton");
const resultArea = document.querySelector("#resultArea");

let calcular = () => {
  const notaCiencias = document.getElementById("notaCiencias");
  const notaHumanas = document.getElementById("notaHumanas");
  const notaMatematica = document.getElementById("notaMatematica");
  const notaLinguagens = document.getElementById("notaLinguagens");
  const notaRedacao = document.getElementById("notaRedacao");

  const notaTotal =
    parseFloat(notaCiencias.value) +
    parseFloat(notaHumanas.value) +
    parseFloat(notaMatematica.value) +
    parseFloat(notaLinguagens.value) +
    parseFloat(notaRedacao.value);
  console.log(notaTotal);

  const media = notaTotal / 5;

  const showTotal = `Total: ${notaTotal.toFixed(2)} | Média: ${media.toFixed(
    2
  )}`;

  resultArea.innerHTML = showTotal;
};

calcButton.addEventListener("click", calcular);
