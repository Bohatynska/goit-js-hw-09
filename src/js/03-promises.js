import Notiflix from 'notiflix';

const refs = {
  formRef: document.querySelector('.form'),
  btnRef: document.querySelector('button'),
  firstDelayRef: document.querySelector('[name="delay"]'),
  stepDelayRef: document.querySelector('[name="step"]'),
  amountRef: document.querySelector('[name="amount"]'),
};
refs.formRef.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  let firstDelay = +refs.firstDelayRef.value;
  let step = +refs.stepDelayRef.value;
  let amount = +refs.amountRef.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += step;
    evt.currentTarget.reset();
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
