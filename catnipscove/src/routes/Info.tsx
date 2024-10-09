import { Cat, CatCardProps } from "../Interface";

const Details: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <article className="details">
      <img src={cat.image} alt={cat.name} />
      <h2>{cat.name}</h2>
      <p>{cat.age}</p>
      <p>{cat.eyecolor}</p>
      <p>{cat.race}</p>
      <p>{cat.description}</p>
    </article>
  );
};

export default Details;
