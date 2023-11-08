"use strict";

var Select = document.querySelector(".select-1");
var inputTxt = document.querySelector(".input-txt-1");
var inputTxt2 = document.querySelector(".input-txt-2");
var buttonCalc = document.querySelector(".button-calc");
var RESULT = document.querySelector(".result");

function velocity(distance, time) {
  var result = distance / time;

  if (isNaN(result) === true) {
    RESULT.innerHTML = '<img src="/img/warning.png">'; // console.error("No puedes dividir 0/0");

    return;
  } // console.log(result);


  RESULT.innerHTML = "<p class=\"number\">".concat(result, "m/s</p>");
}

function time(distance, velocity) {
  var result = distance / velocity;

  if (isNaN(result) === true) {
    RESULT.innerHTML = '<img src="/img/warning.png">'; // console.error("No puedes dividir 0/0");

    return;
  }

  RESULT.innerHTML = "<p class=\"number\">".concat(result, "s</p>");
}

function distance(velocity, time) {
  var result = velocity * time;

  if (isNaN(result) === true) {
    RESULT.innerHTML = '<img src="/img/warning.png">'; // console.error("No puedes dividir 0/0");

    return;
  }

  RESULT.innerHTML = "<p class=\"number\">".concat(result, "m</p>");
}

function changePlaceholder(input1, input2, select) {
  if (select === "Velocidad") {
    input1.setAttribute("placheholder", "Distancia: m");
    input2.setAttribute("placeholder", "Tiempo: s");
  } else if (select === "Tiempo") {
    input1.setAttribute("placeholder", "Distancia: m");
    input2.setAttribute("placeholder", "Velocidad: m/s");
  } else if (select === "Distancia") {
    input1.setAttribute("placeholder", "Velocidad: m/s");
    input2.setAttribute("placeholder", "Tiempo: s");
  } else {
    console.error("value stranger");
  }
}

Select.onchange = function () {
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

buttonCalc.onclick = function () {
  validator(inputTxt.value, inputTxt2.value, Select.value);
  inputTxt.value = "";
  inputTxt2.value = "";
  setTimeout(function () {
    RESULT.innerHTML = "";
  }, 5000);
};