var input = document.getElementById("input");

function getValue(number) {
  input.value += number;
}


function clearAll() {
  input.value = "";
}

function turnOff() {
  input.value = '';  
  input.disabled = true;  
    document.querySelectorAll('button').forEach(button => {
    if (button.innerText !== 'ON') {
      button.disabled = true;
    }
  });
}

function turnOn() {
  input.disabled = false;  
  document.querySelectorAll('button').forEach(button => {
    if (button.innerText !== 'OFF') {
      button.disabled = false;
    }
  });
}
function logarithm() {
  input.value = Math.log10(input.value);
}

function deleteChar() {
  input.value = input.value.slice(0, -1);
}
function squareRoot() {
  input.value = Math.sqrt(input.value);
}
function cube() {
  input.value = input.value * input.value* input.value;
}

function square() {
  input.value = input.value * input.value;
}

function addDecimal() {
  if (!input.value.includes('.')) {
      input.value += '.';  
  }
}

function addDoubleZero() {
  input.value += '00';  
}


function equal() {
  if (input.value) {
    input.value = eval(input.value);
  } else {
    input.value = "syntax error";
  }
}
