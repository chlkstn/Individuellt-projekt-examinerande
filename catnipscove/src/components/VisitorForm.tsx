import { useState } from "react";

import { useCats } from "../CatContext";
import { Cat } from "../Interface";

//placeholder for new ID

let nextId = 0;

function VisitorForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { addVisitor } = useCats(); // Get addCat function from context

  const handleSubmit = () => {
    // Create a new Visitor Object
    const newVisitor: Cat = {
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
      <p>Name = {name}</p>
      <p>Age = {age}</p>
      <p>Race = {race}</p>
      <p>eyecolor = {eyecolor}</p>
      <p>Desc = {description}</p>

      <form>
        <label>
          Input name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Input Age
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>
        <label>
          Input race
          <input
            type="text"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          />
        </label>
        <label>
          Input eyecolor
          <input
            type="text"
            value={eyecolor}
            onChange={(e) => setEyecolor(e.target.value)}
          />
        </label>

        <label>
          Input image
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Input desc
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </form>

      <button onClick={handleSubmit}>Add</button>

      <p> result</p>
    </>
  );
}

export default VisitorForm;
