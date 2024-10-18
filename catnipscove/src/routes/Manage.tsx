import React, { useState } from "react";
import { useCats } from "../CatContext"; // Use the context hook
import { useVisitors } from "../VisitorContext"; // Import useVisitors
import { useNavigate } from "react-router-dom";
import { Cat, Visitor } from "../Interface";

const Manage: React.FC = () => {
  const { cats, loading, error, removeCat } = useCats(); // Get cats, loading, and error from context
  const [catToEdit, setCatToEdit] = useState<Cat | null>(null);
  const navigate = useNavigate(); // Initialize navigate
  const { visitors } = useVisitors(); // Get visitors from context

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEdit = (catId: number) => {
    navigate(`/manage/edit/${catId}`); // Navigate to the edit route
  };

  const handleRemove = (catId: number) => {
    removeCat(catId);
  };

  const handleViewVisitorDetails = (catId: number) => {
    const visitor = visitors.find((visitor) => visitor.catId === catId);
    if (visitor) {
      navigate(`/manage/visitordetails/${catId}`); // Navigate to the visitor details page
    } else {
      console.error("No visitor found for this cat");
    }
  };

  return (
    <section className="manage">
      {cats.map((cat) => (
        <div key={cat.id}>
          <h2>{cat.name}</h2>

          <button onClick={() => handleEdit(cat.id)}>Edit</button>
          <button onClick={() => handleRemove(cat.id)}>Remove</button>
          {cat.booked && (
            <button onClick={() => handleViewVisitorDetails(cat.id)}>
              Visitor
            </button>
          )}
        </div>
      ))}
    </section>
  );
};

export default Manage;
