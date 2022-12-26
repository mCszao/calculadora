const buttons = document.querySelectorAll("button");
let historicCount = [];
buttons.forEach((button) => {
  button.addEventListener("click", mainFuc);
});

function mainFuc() {
  let button = this.innerText;
  let result = document.querySelector(".resultado");
  if (+button) result.value += button;
  if (!+button) {
    if (button == "C") result.value = "";
    if (
      button == "+" ||
      button == "-" ||
      button == "/" ||
      button == "x" ||
      button == "."
    ) {
      result.value += button;
    }
    if (button == "=") {
    }
  }
}
