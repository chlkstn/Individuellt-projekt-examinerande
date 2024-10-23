import { useState, useEffect } from "react";
import { useCats } from "../CatContext";
import { Cat } from "../Interface"; // Import Cat interface
import { useNavigate, useParams } from "react-router-dom";

const EditForm: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the cat ID
  const navigate = useNavigate();
  const catToEdit = cats.find((cat) => cat.id === Number(id));

  const [name, setName] = useState(catToEdit?.name || "");
  const [age, setAge] = useState<number>(catToEdit?.age || 0);
  const [race, setRace] = useState(catToEdit?.race || "");
  const [eyecolor, setEyecolor] = useState(catToEdit?.eyecolor || "");
  const [image, setImage] = useState(catToEdit?.image || "");
  const [description, setDescription] = useState(catToEdit?.description || "");

  const handleSubmit = () => {
    if (catToEdit) {
      const updatedCat: Cat = {
        ...catToEdit,
        name,
        age,
        race,
        eyecolor,
        image,
        description,
      };
      editCat(updatedCat);
      navigate("/manage"); // Navigate back to Manage page after saving
    }
  };

  const handleCancel = () => {
    navigate("/manage"); // Navigate back to Manage page if canceled
  };

  return (
    <>
    <section className="wrapper-form">
      <form>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>
        <label>
          Race
          <input
            type="text"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          />
        </label>
        <label>
          Eye Color
          <input
            type="text"
            value={eyecolor}
            onChange={(e) => setEyecolor(e.target.value)}
          />
        </label>
        <label>
          Image
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

      <button onClick={handleSubmit}>Save Changes</button>
      <button onClick={handleCancel}>Cancel</button>
      </section>
    </>
  );
};

export default EditForm;
