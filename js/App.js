const rangeRed = document.querySelector("#range_R");
const rangeGreen = document.querySelector("#range_G");
const rangeBlue = document.querySelector("#range_B");
const rangeValueRed = document.querySelector("#r");
const rangeValueGreen = document.querySelector("#g");
const rangeValueBlue = document.querySelector("#b");
const colorOutput = document.querySelector("#colorOutput");
const redValue = document.querySelector("#R_value");
const greenValue = document.querySelector("#G_value");
const blueValue = document.querySelector("#B_value");
const result = document.querySelector("#result");
const convert = document.querySelector(".btn");
rangeRed.addEventListener("input", () => {
  rangeValueRed.textContent = rangeRed.value;
  colorOutput.style.background = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
  redValue.value = rangeRed.value;
});
rangeGreen.addEventListener("input", () => {
  rangeValueGreen.textContent = rangeGreen.value;
  colorOutput.style.background = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
  greenValue.value = rangeGreen.value;
});
rangeBlue.addEventListener("input", () => {
  rangeValueBlue.textContent = rangeBlue.value;
  colorOutput.style.background = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
  blueValue.value = rangeBlue.value;
});

redValue.addEventListener("input", () => {
  colorOutput.style.background = `rgb(${
    redValue.value == "" ? 0 : redValue.value
  },${greenValue.value == "" ? 0 : greenValue.value},${
    blueValue.value == "" ? 0 : blueValue.value
  })`;
  rangeRed.value = redValue.value == "" ? 0 : redValue.value;
  rangeValueRed.textContent = rangeRed.value;
});
greenValue.addEventListener("input", () => {
  colorOutput.style.background = `rgb(${
    redValue.value == "" ? 0 : redValue.value
  },${greenValue.value == "" ? 0 : greenValue.value},${
    blueValue.value == "" ? 0 : blueValue.value
  })`;
  rangeGreen.value = greenValue.value == "" ? 0 : greenValue.value;
  rangeValueGreen.textContent = rangeGreen.value;
});
blueValue.addEventListener("input", () => {
  colorOutput.style.background = `rgb(${
    redValue.value == "" ? 0 : redValue.value
  },${greenValue.value == "" ? 0 : greenValue.value},${
    blueValue.value == "" ? 0 : blueValue.value
  })`;
  rangeBlue.value = blueValue.value == "" ? 0 : blueValue.value;
  rangeValueBlue.textContent = rangeBlue.value;
});
convert.addEventListener("click", () => {
  let r = parseInt(rangeRed.value).toString(16);
  let g = parseInt(rangeGreen.value).toString(16);
  let b = parseInt(rangeBlue.value).toString(16);
  result.innerHTML = `#${r == 0 ? "00" : r}${g == 0 ? "00" : g}${
    b == 0 ? "00" : b
  }`;
});
