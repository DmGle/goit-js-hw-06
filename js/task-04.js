const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

function updateCounter() {
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounter();
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounter();
});

updateCounter();