import React, { useEffect, useState } from "react";

function RandomQuotes() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("Hello world...!");
  }, [count]);
  return (
    <div>
      RandomQuotes
      <button
        onClick={() => setCount(count + 1)}
        className="bg-gray-400 p-5 text-2xl m-2"
      >
        1
      </button>
      <button
        onClick={() => setCount2(count2 + 1)}
        className="bg-gray-400 p-5 text-2xl m-2"
      >
        2
      </button>
    </div>
  );
}

export default RandomQuotes;
