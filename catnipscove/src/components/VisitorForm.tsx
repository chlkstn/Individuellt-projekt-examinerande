import { useState,useEffect } from "react";
import { useVisitors } from "../VisitorContext";
import { useCats } from "../CatContext";
import { Cat } from "../Interface";
import { useParams,useNavigate } from "react-router-dom";

import { Visitor } from "../Interface";

//placeholder for new ID

let nextId = 0;

// based on the cats id we create a new visitor for this specific cat

function VisitorForm({ catId }: { catId: number }) {
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { addVisitor } = useVisitors();
  const { bookCat } = useCats();
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/gallery"); // Navigate back to Gallery page if canceled
  };
  

  const handleSubmit = () => {
    // Create a new Visitor Object
    const newVisitor: Visitor = {
      id: nextId++, // Increment the ID
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      message: message,
      // This should link the visitor the the specific cat
      catId: catId, 
    };
    addVisitor(newVisitor); // Add the visitor to the context
    bookCat(catId); // Book the cat using the visitor's ID
    navigate("/gallery");
  };

  return (
    <>
    <section className="wrapper-form">

      <h3> Please fill in your contact details</h3>
      <form>
        <label>
          Firstname
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          Lastname
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label>
          Phonenumber
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Email
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
      <button onClick={handleCancel}>Cancel</button>

      
      </section>
    </>
  );
}

export default VisitorForm;
