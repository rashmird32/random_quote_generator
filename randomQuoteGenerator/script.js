const quoteE1 = document.querySelector(".quote");
const authorE1 = document.querySelector(".author");

const API_URL = "https://dummyjson.com/quotes/random";

const getQuote = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const quote = data.quote;
    const author = data.author || "Unknown";

    quoteE1.textContent = quote;
    authorE1.textContent = author;
  } catch (error) {
    console.log(error);
    quoteE1.textContent = "Oops! Something went wrong";
    authorE1.textContent = "";
  }
};

const newQuoteBtn = document.querySelector(".new-quote-btn");

getQuote();

newQuoteBtn.addEventListener("click", getQuote);

// "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
// https://type.fit/api/quotes
// https://api.whatdoestrumpthink.com/api/v1/quotes/random
