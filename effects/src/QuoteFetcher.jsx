import { useState, useEffect } from "react";
import "./QuoteFetcher.css";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ author: "", text: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const res = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await res.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
    setIsLoading(false);
  }

  return (
    <div>
      <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
        Loading...
      </p>
      <h1>Author: {quote.author}</h1>
      <h3>Full Quote: {quote.text}</h3>
      <button onClick={fetchQuote}>Get Random Quote</button>
    </div>
  );
}
