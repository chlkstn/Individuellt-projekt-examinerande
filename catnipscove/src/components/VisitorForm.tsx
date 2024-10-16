import { useState } from "react";

import { useCats } from "../CatContext";
import { Visitor } from "../Interface";

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
    const newVisitor: Visitor = {
      id: nextId++, // Increment the ID
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      message: message,
    };
  };

  return (
    <>
      <form>
        <label>
          Input Firstname
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          Input Lastname
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label>
          Input Phonenumber
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Input email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Write us a message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </form>

      <button onClick={handleSubmit}>Add</button>

      <p> result</p>
    </>
  );
}

export default VisitorForm;
