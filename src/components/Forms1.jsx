import { useEffect, useState } from "react";
import useBreedlist from "./custom_hook";
import Pet from "./Pet";
const Location = ["", "Bengaluru", "Huballi", "Dharwad", "Davangere"];
const Animals = ["", "dog", "reptile", "bird", "rabbit"];
var c = 0;
const Search1 = () => {
  const [name, setName] = useState("");
  const [loc, setlocation] = useState("");
  const [animal, setanimal] = useState("");
  const [breeds, setbreeds] = useState("");
  const [display, setDisplay] = useState([]);
  const [breed] = useBreedlist(animal);

  //class types. [variable, method]
  //usestate(type).

  useEffect(() => {
    request();
    c++;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps. [warning]
  //[] have dependencies that help render on change of the same.
  //useEffect(function,dependencies);  [] -> run it once.

  async function request() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&city=${loc}&name=${name}`
    );

    const json = await res.json();
    setDisplay(json.pets);
    //console.log(json.pets);
  }

  return (
    <>
      <h1>{c}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          request();
        }}
      >
        <label htmlFor="name">Enter Name:</label>
        <input
          type="name"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="Location">Select location: </label>

        <select
          id="loc"
          value={loc}
          onChange={(e) => setlocation(e.target.value)}
        >
          {Location.map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
        <br />

        <label htmlFor="animal">Select animal:</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => setanimal(e.target.value)}
        >
          {Animals.map((f) => (
            <option value={f}>{f}</option>
          ))}
        </select>
        <br />

        <label htmlFor="breed">Select breed:</label>
        <select value={breeds} onChange={(e) => setbreeds(e.target.value)}>
          {breed.map((f) => (
            <option value={f}>{f}</option>
          ))}
        </select>
        <br />
        <hr />
        <button>Submit</button>
        <hr />
      </form>

      {display.map((display) => (
        <Pet
          name={display.name}
          animal={display.animal}
          Location={display.city}
          key={display.id}
        />
      ))}
    </>
  );
};

export default Search1;
