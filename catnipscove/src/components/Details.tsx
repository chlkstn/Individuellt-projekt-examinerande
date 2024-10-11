import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCats } from "../CatContext"; // Import the custom hook to access context
import { Cat } from "../Interface";

const Details: React.FC = () => {
  const { catId } = useParams<{ catId: string }>(); // Get the catId from the route params
  const { cats } = useCats(); // Access cats from the context
  const [cat, setCat] = useState<Cat | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Find the selected cat from the context
    const foundCat = cats.find((cat) => cat.id === parseInt(catId || "", 10));

    if (foundCat) {
      setCat(foundCat);
    } else {
      setError("Cat not found");
    }
    setLoading(false);
  }, [catId, cats]); // Dependency on catId and cats

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
    </section>
  );
};

export default Details;
