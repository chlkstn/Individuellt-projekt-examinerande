import React from "react";
import { useCats } from "../CatContext"; // Use the context hook
import Card from "../components/Card";

const Gallery: React.FC = () => {
  const { cats, loading, error } = useCats(); // Get cats, loading, and error from context

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="gallery">
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
        
      ))}
    </section>
  );
};

export default Gallery;
