function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');

btnStartRef.addEventListener('click', onStartClick);
btnStopRef.addEventListener('click', onstopClick);

let intervalId = null;

function onStartClick() {
  //   btnStartRef.disabled = true;
  btnStartRef.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onstopClick() {
  btnStartRef.disabled = false;
  //   btnStopRef.removeAttribute('disable');
  clearInterval(intervalId);
}
