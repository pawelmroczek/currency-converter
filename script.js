{
  const currencyInput = document.querySelector(".js-currencyInput");
  const currencyOutput = document.querySelector(".js-currencyOutput");
  const currencyRate = document.querySelector(".js-rate");
  const exchangeInput = document.querySelector(".js-exchangeInput");
  const exchangeOutput = document.querySelector(".js-exchangeOutput");
  const symbolEntrance = document.querySelector(".js-form__symbol--entrance");
  const symbolExit = document.querySelector(".js-form__symbol--exit");

  const welcome = () => {
    console.log("Witam");
  };

  const checkingValue = () => {
    if (exchangeInput.value < 0) {
      alert("Podana wartość nie może być mniejsza od 0!");
    } else {
      calculate(exchangeInput, currencyRate);
    }
  };

  const calculate = (cashInput, cashRate) => {
    let cashOutput = cashInput.value * cashRate.value;

    exchangeOutput.value = cashOutput.toFixed(2);
  };

  const changeInnerText = (element, newText) => {
    element.innerText = newText;
  };

  const startingOptions = () => {
    currencyInput.value === "PLN";
    currencyOutput.value === "USD";
    currencyRate.value = 0.22;
    symbolEntrance.innerText = "PLN";
    symbolExit.innerText = "USD";
  };

  const curencyCalculate = () => {
    switch (currencyInput.value) {
      case "PLN":
        changeInnerText(symbolEntrance, "PLN");
        switch (currencyOutput.value) {
          case "PLN":
            changeInnerText(symbolExit, "PLN");
            currencyRate.value = 1;
            break;
          case "USD":
            changeInnerText(symbolExit, "USD");
            currencyRate.value = 0.2162;
            break;
          case "EUR":
            changeInnerText(symbolExit, "EUR");
            currencyRate.value = 0.2124;
            break;
          case "CHF":
            changeInnerText(symbolExit, "CHF");
            currencyRate.value = 0.2081;
            break;
        }
        break;
      case "USD":
        changeInnerText(symbolEntrance, "USD");
        switch (currencyOutput.value) {
          case "PLN":
            changeInnerText(symbolExit, "PLN");
            currencyRate.value = 4.6254;
            break;
          case "USD":
            changeInnerText(symbolExit, "USD");
            currencyRate.value = 1;
            break;
          case "EUR":
            changeInnerText(symbolExit, "EUR");
            currencyRate.value = 0.9823;
            break;
          case "CHF":
            changeInnerText(symbolExit, "CHF");
            currencyRate.value = 0.9616;
            break;
        }
        break;
      case "EUR":
        changeInnerText(symbolEntrance, "EUR");
        switch (currencyOutput.value) {
          case "PLN":
            changeInnerText(symbolExit, "PLN");
            currencyRate.value = 4.7085;
            break;
          case "USD":
            changeInnerText(symbolExit, "USD");
            currencyRate.value = 1.0187;
            break;
          case "EUR":
            changeInnerText(symbolExit, "EUR");
            currencyRate.value = 1;
            break;
          case "CHF":
            changeInnerText(symbolExit, "CHF");
            currencyRate.value = 0.9796;
            break;
        }
      case "CHF":
        changeInnerText(symbolEntrance, "CHF");
        switch (currencyOutput.value) {
          case "PLN":
            changeInnerText(symbolExit, "PLN");
            currencyRate.value = 4.8101;
            break;
          case "USD":
            changeInnerText(symbolExit, "USD");
            currencyRate.value = 1.0399;
            break;
          case "EUR":
            changeInnerText(symbolExit, "EUR");
            currencyRate.value = 1.0215;
            break;
          case "CHF":
            changeInnerText(symbolExit, "CHF");
            currencyRate.value = 1;
            break;
        }
        break;
    }

    calculate(exchangeInput, currencyRate);
  };

  startingOptions();
  welcome();

  const choiceForm = document.querySelector(".js-currencyChoice");
  const exchangeForm = document.querySelector(".js-exchange");

  choiceForm.addEventListener("input", curencyCalculate);
  exchangeForm.addEventListener("input", checkingValue);
}
