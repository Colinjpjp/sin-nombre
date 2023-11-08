"use strict";

var arr = [];

function range(start, end, step) {
  if (step === undefined) {
    console.log(step);

    for (var i = 0; i <= end - start; i++) {
      arr.push(i);
    }

    arr.push(end);
    console.log(arr);
    return;
  } else {
    console.log(step);

    for (var _i = 0; _i <= end - start; _i + step) {
      arr.push(_i);
    }

    arr.push(end);
    console.log(arr);
    return;
  }
}

range(1, 10, 2);

function add(array) {
  if (array.length < 0) {
    console.error("no tiene elementos");
  } else {
    var total = 0;

    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }

    console.log(total);
  }
}

add(arr);