const rangeInput = document.querySelector('.rangeInput');
const text = document.querySelector('.text');
const fontSelector = document.querySelector('.fontSelector');

rangeInput.addEventListener('input', function () {
  text.style.fontSize = this.value + 'px';
});

fontSelector.addEventListener('change', () => {
  text.style.fontFamily = fontSelector.value;
});
