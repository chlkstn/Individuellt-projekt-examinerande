import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCats } from "../CatContext"; // Import the custom hook to access context
import { Cat } from "../Interface";

const Details: React.FC = () => {
  const { catId } = useParams<{ catId: string }>(); // Get the catId from the route params
  const { cats, loading, error } = useCats(); // Access cats, loading, and error from the context
  const [cat, setCat] = useState<Cat | null>(null);

  useEffect(() => {
    // Find the selected cat from the context
    const foundCat = cats.find((cat) => cat.id === parseInt(catId || "", 10));

    if (foundCat) {
      setCat(foundCat);
    }
  }, [catId, cats]); // Dependency on catId and cats

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cat) {
    return <div>Cat not found</div>;
  }

  return (
    <section className="details">
      <h1>{cat.name}</h1>
      <figure>
        <img src={cat.image} alt={cat.name} />
      </figure>

      <p>Age: {cat.age}</p>
      <p>Race: {cat.race}</p>
      <p>Eye Color: {cat.eyecolor}</p>
      <p>{cat.description}</p>

      <button> Next</button>
      <button> Prev</button>
      <button> Back</button>
    </section>
  );
};

export default Details;
