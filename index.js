const refs = {
    btnStart:document.querySelector('[data-action="start"]'),
    btnStop:document.querySelector('[data-action="stop"]'),
    body:document.querySelector('body'),
}
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let switchColorsId = 0;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const TIMEOUT = 1000;
function changeBgColor() {
     switchColorsId = setInterval(()=> {
        let changeColorNumber = randomIntegerFromInterval(0, colors.length - 1);
        refs.body.style.backgroundColor = colors[changeColorNumber];
    }, TIMEOUT);
    if (switchColorsId) {
        refs.btnStart.setAttribute('disabled', true);
    }
}

function onStopBtnClick() {
  refs.btnStart.removeAttribute('disabled');
  clearInterval(switchColorsId);
  
}
refs.btnStart.addEventListener('click', changeBgColor);
refs.btnStop.addEventListener('click', onStopBtnClick);


