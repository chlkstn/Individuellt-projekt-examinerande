import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCats } from "../CatContext"; // Import the custom hook to access context
import { Cat } from "../Interface";
import VisitorForm from "./VisitorForm";
import { Link } from "react-router-dom";
import { CatCardProps } from "../Interface";


const Details: React.FC = () => {
  const { catId } = useParams<{ catId: string }>(); // Get the catId from the route params
  const { cats, loading, error } = useCats(); // Access cats, loading, and error from the context
  const [cat, setCat] = useState<Cat | null>(null);
  const { bookCat } = useCats();
  const [showVisitorForm, setShowVisitorForm] = useState(false);
  

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

  const handleBookCat = (catId: number) => {
    /* bookCat(catId); */
    setShowVisitorForm(true);
  };

  return (
    <article className="details">
      {showVisitorForm ? (
        <VisitorForm catId={cat.id} />
      ) : (
        <>
          
          <figure>
          <img src={cat.image} alt={cat.name} />
          </figure>


          <section className="details-info">
          <h1>{cat.name}</h1>

          
          <h3>Age: {cat.age}</h3>
          <h3>Race: {cat.race}</h3>
          <h3>Eye Color: {cat.eyecolor}</h3>
          <p>{cat.description}</p>

          {!cat.booked && ( // Only show the button if the cat is not booked
            <button onClick={() => handleBookCat(cat.id)}>Book cat</button>
          )}
          </section>
        </>
      )}
    </article>
  );
};

export default Details;
