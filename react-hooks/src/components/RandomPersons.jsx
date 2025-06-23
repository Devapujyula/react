import React, { useEffect, useState } from "react";

function RandomPersons() {
  const [people, setPeople] = useState({});
  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .then((err) => console.log(err));
  });
  return (
    <div>
      RandomPersons
      <h2>{people.name}</h2>
      <h3>{people.name}</h3>
      <h3>{people.name}</h3>
    </div>
  );
}

export default RandomPersons;
