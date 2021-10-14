// ============  stepper  ============ 

const minusButtons = document.querySelectorAll('.stepper-button--minus');
const plusButtons = document.querySelectorAll('.stepper-button--plus');
let stepperValue = document.querySelectorAll('.stepper-value');

minusButtons.forEach(minusButton => {
   minusButton.addEventListener('click', onMinusButtonClick);
});

plusButtons.forEach(plusButton => {
   plusButton.addEventListener('click', onPlusButtonClick);
});


function onPlusButtonClick() {
   this.previousElementSibling.innerHTML = '0' + String(Number(this.previousElementSibling.innerHTML) + 1);
   if (this.previousElementSibling.innerHTML == '01') {
      this.previousElementSibling.previousElementSibling.removeAttribute('disabled');
   }
};

function onMinusButtonClick() {
   this.nextElementSibling.innerHTML = '0' + String(Number(this.nextElementSibling.innerHTML) - 1);
   if (this.nextElementSibling.innerHTML == '00') {
      this.setAttribute('disabled', 'disabled');
   }
};



// ============  range  ============ 

const range = document.querySelector('.range');

window.addEventListener('load', changeRangeBackground);
range.addEventListener("input", changeRangeBackground);

function changeRangeBackground() {
   let rangeValue = range.value;
   range.style.background = `-webkit-linear-gradient(left,var(--accent) 0%, var(--accent) ${rangeValue}%, var(--shade) ${rangeValue}%, var(--shade) 100%)`;
}



// ============  dropdown  ============ 

const multiDefault = () => {
   const elements = document.querySelectorAll('.dropdown');
   elements.forEach(el => {
      const choices = new Choices(el, {
         searchEnabled: false,
         itemSelectText: '',
      });
   }); 
};

multiDefault();


