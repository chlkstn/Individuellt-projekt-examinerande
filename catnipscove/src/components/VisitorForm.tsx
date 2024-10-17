import { useState,useEffect } from "react";
import { useVisitors } from "../VisitorContext";
import { useCats } from "../CatContext";
import { Cat } from "../Interface";
import { useParams,useNavigate } from "react-router-dom";

import { Visitor } from "../Interface";

//placeholder for new ID

let nextId = 0;

function VisitorForm({ catId }: { catId: number }) {
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { addVisitor } = useVisitors();
  const { bookCat } = useCats();
  const navigate = useNavigate();
  

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
    addVisitor(newVisitor); // Add the visitor to the context
    bookCat(catId); // Book the cat using the visitor's ID
    navigate("/gallery");
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

      <button onClick={handleSubmit}>Submit</button>

      <p> result</p>
    </>
  );
}

export default VisitorForm;
