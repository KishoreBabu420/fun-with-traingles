'use strict';
const side1 = document.getElementById('side#1');

const side2 = document.getElementById('side#2');

const btnCalculate = document.getElementById('btn-calculate');

const result = document.getElementById('result');

// functions
const calculateHypotenuse = function () {
  const hypotenuse = Math.sqrt(
    Number(side1.value) ** 2 + Number(side2.value) ** 2
  );
  return hypotenuse;
};

//event listeners

btnCalculate.addEventListener('click', (e) => {
  e.preventDefault();
  let hypotenuse = calculateHypotenuse();
  result.style.display = 'block';
  result.innerText = `Hypotenuse for sides ${side1.value} & ${side2.value} is ${hypotenuse}`;
});
