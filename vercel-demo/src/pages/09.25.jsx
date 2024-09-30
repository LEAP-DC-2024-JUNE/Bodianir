const { useState } = require("react");

const Search = () => {
  const [inputvalue, setinputvalue] = useState("");
  const people = [
    {
      name: "Anir",
      age: 26,
      class: "Leap",
    },
    {
      name: "Anar",
      age: 26,
      class: "Leap",
    },
    {
      name: "Alungoo",
      age: 26,
      class: "Leap",
    },
    {
      name: "Sumiya",
      age: 26,
      class: "Leap",
    },
    {
      name: "Munhuush",
      age: 26,
      class: "Leap",
    },
    {
      name: "Suvdaa",
      age: 26,
      class: "Leap",
    },
  ];
  const filteredinputvalue = people.filter((person) =>
    person.name.toLowerCase().includes(inputvalue.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        className="border-2 text-black"
        onChange={(event) => setinputvalue(event.target.value)}
      />
      {filteredinputvalue.length == 0
        ? people.map((person) => {
            return (
              <div className="border-2">
                <p>No found result</p>
              </div>
            );
          })
        : filteredinputvalue.map((person) => {
            return (
              <div className="border-2">
                <p>{person.name}</p>
                {person.class}
              </div>
            );
          })}
    </div>
  );
};
export default Search;
