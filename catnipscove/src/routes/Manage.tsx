import React, { useState } from "react";
import { useCats } from "../CatContext"; // Use the context hook
import Card from "../components/Card";
import EditForm from "../components/EditForm";
import { Cat } from "../Interface";
import { useNavigate } from "react-router-dom";

const Manage: React.FC = () => {
  const { cats, loading, error } = useCats(); // Get cats, loading, and error from context
  const [catToEdit, setCatToEdit] = useState<Cat | null>(null);
  const navigate = useNavigate(); // Initialize navigate

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEditClick = (catId: number) => {
    navigate(`/manage/edit/${catId}`); // Navigate to the edit route
  };



  return (
    <section className="gallery">
      {cats.map((cat) => (
        <div key={cat.id}>
          <Card cat={cat} />
          <button onClick={() => handleEditClick(cat.id)}>Edit</button>
        </div>
      ))}
    </section>
  );
};

export default Manage;
