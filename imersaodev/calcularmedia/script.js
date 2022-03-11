const calcButton = document.getElementById("calcButton");
const resultArea = document.querySelector("#resultArea");

let calcular = () => {
  const notaCiencias = document.getElementById("notaCiencias");
  const notaHumanas = document.getElementById("notaHumanas");
  const notaMatematica = document.getElementById("notaMatematica");
  const notaLinguagens = document.getElementById("notaLinguagens");
  const notaRedacao = document.getElementById("notaRedacao");

  const notaTotal =
    parseInt(notaCiencias.value) +
    parseInt(notaHumanas.value) +
    parseInt(notaMatematica.value) +
    parseInt(notaLinguagens.value) +
    parseInt(notaRedacao.value);
  console.log(notaTotal);

  const media = notaTotal / 5;

  const showTotal = `Nota total: <strong>${notaTotal.toFixed(2)}</strong>. <br> Média: <strong>${media.toFixed(2)}</strong>.`;
  const showResultElement = document.createElement("p");
  showResultElement.id = "resultado"

    if (resultArea.innerHTML !== '') {
      const getResultArea = document.getElementById('resultado')
      resultArea.removeChild(getResultArea  )
    }  showResultElement.innerHTML = `${showTotal}`;
    resultArea.appendChild(showResultElement);
};

calcButton.addEventListener("click", calcular);
