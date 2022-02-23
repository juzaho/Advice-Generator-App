const dice = document.querySelector(".dice");
const adviceResp = document.querySelector(".advice");
const adviceNum = document.querySelector(".number");


dice.addEventListener('click', () => {
  getAdvice();
});


function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
  .then(response => {
    return response.json();
  })
  .then(adviceData => {
    const Advice = adviceData.slip;

    adviceNum.innerHTML = `<span>${Advice.id}<span>`;
    adviceResp.innerHTML = `<h1>"${Advice.advice}"<h1>`;
  })
  .catch(error => {
    console.log(error);
  })
}

