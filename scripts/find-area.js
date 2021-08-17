'use strict';
const base = document.getElementById('base');

const height = document.getElementById('height');

const btnCalculate = document.getElementById('btn-calculate');

const result = document.getElementById('result');

// functions
const calculateArea = function () {
  const area = Math.floor(0.5 * (Number(base.value) * Number(height.value)));
  return area;
};

//event listeners

btnCalculate.addEventListener('click', (e) => {
  e.preventDefault();
  let area = calculateArea();
  result.style.display = 'block';
  result.innerHTML = `Area of Triangle with base ${base.value}cm & height ${height.value}cm is ${area}cm<sup>2</sup>`;
});
