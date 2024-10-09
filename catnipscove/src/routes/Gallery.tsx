import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import { CatnipsCove, Cat } from "../Interface";

const Gallery: React.FC = () => {
  const [data, setData] = useState<CatnipsCove | null>(null); // Set the state type

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data: CatnipsCove) => setData(data)) // Cast the fetched data as CatnipsCove
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="gallery">
      {data.cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </section>
  );
};

export default Gallery;
