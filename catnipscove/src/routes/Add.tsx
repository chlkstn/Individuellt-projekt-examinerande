import { useState } from "react";
import Card from "../components/Card";
import { useCats } from "../CatContext";
import { Cat } from "../Interface";

//placeholder for new ID

let nextId = 0;

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [race, setRace] = useState("");
  const [eyecolor, setEyecolor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const { addCat } = useCats(); // Get addCat function from context

  const handleSubmit = () => {
    // Create a new Cat object
    const newCat: Cat = {
      id: nextId++, // Increment the ID
      name: name,
      age: age,
      race: race,
      eyecolor: eyecolor,
      image: image,
      description: description,
    };

    console.log("Adding new cat: ", newCat);

    // Call addCat to add the new cat to the context state
    addCat(newCat);

    // Optionally, reset the form after submission
    setName("");
    setAge(0);
    setRace("");
    setEyecolor("");
    setImage("");
    setDescription("");
  };

  return (


    <>

      <section className="wrapper-form">
        <h1> Add a new cat</h1>
        <form>
          <label>
            Cats name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Cats Age
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </label>
          <label>
            Cats race
            <input
              type="text"
              value={race}
              onChange={(e) => setRace(e.target.value)}
            />
          </label>
          <label>
            Cats eyecolor
            <input
              type="text"
              value={eyecolor}
              onChange={(e) => setEyecolor(e.target.value)}
            />
          </label>

          <label>
            Cats image
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </form>

        <button onClick={handleSubmit}>Add</button>
      </section>
    </>
  );
}

export default Add;
