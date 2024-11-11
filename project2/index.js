const brightnessBar = document.querySelector('.brightness-bar');
const contrastBar = document.querySelector('.contrast-bar');
const saturationBar = document.querySelector('.saturation-bar');
const hueBar = document.querySelector('.hue-bar');
const blurBar = document.querySelector('.blur-bar');
const img = document.querySelector('.image');
const root = document.documentElement;

const updateFilter = () => {
  root.style.setProperty('--brightness', brightnessBar.value + '%');
  root.style.setProperty('--contrast', contrastBar.value + '%');
  root.style.setProperty('--saturation', saturationBar.value + '%');
  root.style.setProperty('--hue', hueBar.value + 'deg');
  root.style.setProperty('--blur', blurBar.value + 'px');
};

// const updateFilter = () => {
//   img.style.filter = `
//     brightness(${brightnessBar.value}%)
//     contrast(${contrastBar.value}%)
//     saturate(${saturationBar.value}%)
//     hue-rotate(${hueBar.value}deg)
//     blur(${blurBar.value}px)    `;
// };

[brightnessBar, contrastBar, saturationBar, hueBar, blurBar].forEach(bar => {
  bar.addEventListener('input', updateFilter);
});

document.querySelector('.scroller').addEventListener('click', () => {
  document.querySelector('.example-section').scrollIntoView({ behavior: 'smooth' });
});
