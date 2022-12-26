const buttons = document.querySelectorAll("button");
let historicCount = [];
buttons.forEach((button) => {
  button.addEventListener("click", mainFuc);
});
let operator;

function mainFuc() {
  let button = this.innerText;
  let result = document.querySelector(".resultado");
  console.log(historicCount);
  // console.log(operator);
  if (+button || button == "0") result.value += button;
  if (!+button) {
    if (button == "C") result.value = "";
    if (
      button == "+" ||
      button == "-" ||
      button == "/" ||
      button == "*" ||
      button == "."
    ) {
      if (operator === undefined) {
        result.value += button;
        operator = button;
      } else {
        result.value = eval(result.value);
        historicCount.push(result.value);
        result.value += button;
        operator = button;
      }
    }
    if (button == "=") {
      result.value = eval(result.value);
      historicCount.push(result.value);
    }
  }
}
