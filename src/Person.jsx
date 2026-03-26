import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Malkovich",
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleChange = (e) => {
    if (e.target.id === "first")
      setPerson({ ...person, firstName: e.target.value });
    else if (e.target.id === "last")
      setPerson({ ...person, lastName: e.target.value });
  };

  return (
    <>
      <h1>{person.firstName + " " + person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <label>
        First Name:
        <input id="first" onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input id="last" onChange={handleChange} />
      </label>
    </>
  );
}
