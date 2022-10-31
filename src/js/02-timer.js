// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const refs = {
  inputRef: document.querySelector('#datetime-picker'),
  btnRef: document.querySelector('[data-start]'),
  spanDaysRef: document.querySelector('[data-days]'),
  spanHoursRef: document.querySelector('[data-hours]'),
  spanMinRef: document.querySelector('[data-minutes]'),
  spanSecRef: document.querySelector('[data-seconds]'),
};

refs.btnRef.addEventListener('click', onBtnStartClick);
refs.btnRef.disabled = true;
const CURRETNT_TIME = new Date();
let SELECTED_TIME = new Date();
let deltaTime = 0;
let timerId = null;

const options = {
  enableTime: true, // включает выбор времени
  time_24hr: true, // Отображает средство выбора времени в 24-часовом режиме без выбора AM/PM, если включено.
  defaultDate: new Date(), // Устанавливает начальную выбранную дату
  minuteIncrement: 1, // Регулирует шаг ввода минут (включая прокрутку)
  onClose(selectedDates) {
    if (selectedDates[0] < SELECTED_TIME) {
      Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
      // refs.btnStart.disabled = true;
      // console.log(selectedDates[0]);
    } else {
      refs.btnRef.disabled = false;
      Notify.success('This is correct time');
      SELECTED_TIME = selectedDates[0];
    }
  },
};
const calendar = flatpickr('#datetime-picker', options);

function onBtnStartClick() {
  refs.btnRef.disabled = true;
  timerId = setInterval(() => {
    deltaTime = SELECTED_TIME - Date.now();
    let convertTime = convertMs(deltaTime);
    if (deltaTime <= 0) {
      Notify.info('Time is over! Please reload the page');
      clearInterval(timerId);
    } else {
      makeTimerInterface(convertTime);
      // refs.input.disabled = true;
    }
  }, 1000);
  console.log(convertMs(deltaTime));
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function makeTimerInterface(converTime) {
  refs.spanDaysRef.textContent = addLeadingZero(converTime.days);
  refs.spanHoursRef.textContent = addLeadingZero(converTime.hours);
  refs.spanMinRef.textContent = addLeadingZero(converTime.minutes);
  refs.spanSecRef.textContent = addLeadingZero(converTime.seconds);
}
