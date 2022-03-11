const convertButton = document.getElementById("convertButton");
const resultArea = document.getElementById("resultArea");

const fetchCoins = async () => {
  const returnItems = await fetch(
    `https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`
  )
    .then((element) => element.json())
    .catch(() => "You must provide an url");

  const selectedCoin = document.getElementById("coins").value;
  const inputValue = document.getElementById("valueToConvert").value;

  const usdValue = returnItems.USDBRL.bid;
  const eurValue = returnItems.EURBRL.bid;
  const btcValue = returnItems.BTCBRL.bid;

  switch (selectedCoin) {
    case 'USD - Dólar':
      resultArea.innerHTML = `${inputValue * usdValue} reais`;
      break;
    case 'EUR - Euro':
      resultArea.innerHTML = `${inputValue * eurValue} reais`;
      break;
    case 'BTC - Bitcoin':
      resultArea.innerHTML = `${inputValue * btcValue} reais`;
      break;
  } 
};

convertButton.addEventListener("click", fetchCoins);
