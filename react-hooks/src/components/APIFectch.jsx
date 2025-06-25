import React, { useEffect, useState } from "react";

function APIFectch() {
  const [Quote, setQuote] = useState({});
  useEffect(() => {
    console.log("Hello world...!");
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      API-Fectch
      <h2 className="text-3xl">{Quote.quote}</h2>
      <p>{Quote.author}</p>
    </div>
  );
}

export default APIFectch;
