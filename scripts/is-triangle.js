'use strict';
const angle1 = document.getElementById('angle#1');

const angle2 = document.getElementById('angle#2');

const angle3 = document.getElementById('angle#3');

const btnCheck = document.getElementById('btn-check');

const result = document.getElementById('result');

// functions
const sumOfAngles = function () {
  const sum =
    Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
  return sum;
};

//event listeners

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(sumOfAngles());
  if (sumOfAngles() === 180) {
    result.style.display = 'block';
    result.style.color = 'green';
    result.innerText = 'Yayy, the angles form a triangle';
  } else {
    result.style.display = 'block';
    result.style.color = 'red';
    result.innerText = 'Oh Oh!, the angles do not form a triangle';
  }
});
