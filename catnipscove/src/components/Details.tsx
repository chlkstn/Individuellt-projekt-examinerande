// CatDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CatnipsCove, Cat } from "../Interface";

const Details: React.FC = () => {
  const { catId } = useParams<{ catId: string }>(); // Get the catId from the route params
  const [cat, setCat] = useState<Cat | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the data.json file from the public folder
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: CatnipsCove) => {
        // Find the selected cat from the data
        const foundCat = data.cats.find(
          (cat: { id: number }) => cat.id === parseInt(catId || "", 10)
        );
        if (foundCat) {
          setCat(foundCat);
        } else {
          setError("Cat not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, [catId]);

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
