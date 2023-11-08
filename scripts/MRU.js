const Select = document.querySelector(".select-1");
const inputTxt = document.querySelector(".input-txt-1");
const inputTxt2 = document.querySelector(".input-txt-2");
const buttonCalc = document.querySelector(".button-calc");
const RESULT = document.querySelector(".result");
const imgFormula = document.querySelector(".img-formula");

function velocity(distance, time) {
  const result = distance / time;
  if (isNaN(result) === true) {
    RESULT.innerHTML = '<img src="/img/warning.png">';
    // console.error("No puedes dividir 0/0");
    return;
  }
  // console.log(result);
  RESULT.innerHTML = `<p class="number">${result}m/s</p>`;
}

function time(distance, velocity) {
  const result = distance / velocity;
  if (isNaN(result) === true) {
    RESULT.innerHTML = '<img src="/img/warning.png">';
    // console.error("No puedes dividir 0/0");
    return;
  }
  RESULT.innerHTML = `<p class="number">${result}s</p>`;
}

function distance(velocity, time) {
  const result = velocity * time;
  if (isNaN(result) === true) {
    RESULT.innerHTML = '<img src="/img/warning.png">';
    // console.error("No puedes dividir 0/0");
    return;
  }
  RESULT.innerHTML = `<p class="number">${result}m</p>`;
}

function changePlaceholder(input1, input2, select, img) {
  if (select === "Velocidad") {
    input1.setAttribute("placheholder", "Distancia: m");
    input2.setAttribute("placeholder", "Tiempo: s");
    imgFormula.setAttribute("src", "/img/velocity.jpg");
  } else if (select === "Tiempo") {
    input1.setAttribute("placeholder", "Distancia: m");
    input2.setAttribute("placeholder", "Velocidad: m/s");
    imgFormula.setAttribute("src", "/img/time.png");
  } else if (select === "Distancia") {
    input1.setAttribute("placeholder", "Velocidad: m/s");
    input2.setAttribute("placeholder", "Tiempo: s");
    imgFormula.setAttribute("src", "/img/distance.png");
  } else {
    console.error("valor desconocido");
  }
}

Select.onchange = () => {
  changePlaceholder(inputTxt, inputTxt2, Select.value);
};

function disperser(select) {
  if (select === "Velocidad") {
    velocity(parseFloat(inputTxt.value), parseFloat(inputTxt2.value));
  } else if (select === "Tiempo") {
    time(parseFloat(inputTxt.value), parseFloat(inputTxt2.value));
  } else if (select === "Distancia") {
    distance(parseFloat(inputTxt.value), parseFloat(inputTxt2.value));
  } else {
    console.log("Error");
  }
}

function validator(input1, input2, select) {
  if (input1.trim() === "" || input2.trim() === "") {
    console.error("Error");
    RESULT.innerHTML = '<img src="/img/warning.png">';
    return;
  }

  if (isNaN(input1) === true || isNaN(input2) === true) {
    console.error("Ingresa un numero !!!");
    RESULT.innerHTML = '<img src="/img/warning.png">';
    return;
  }

  return disperser(Select.value);
}

buttonCalc.onclick = () => {
  validator(inputTxt.value, inputTxt2.value, Select.value);
  inputTxt.value = "";
  inputTxt2.value = "";
  setTimeout(() => {
    RESULT.innerHTML = "";
  }, 5000);
};
