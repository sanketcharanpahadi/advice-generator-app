const adviceID = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");
const dice = document.querySelector(".expand");
let quote;

function showQuote(obj) {
  adviceID.textContent = `advice #${obj.id}`;
  advice.textContent = `"${obj.advice}"`;
}

const getQuote = async function () {
  const quoteData = await fetch("https://api.adviceslip.com/advice");
  quote = await quoteData.json();
  const { slip } = quote;
  showQuote(slip);
};

dice.addEventListener("click", getQuote);
