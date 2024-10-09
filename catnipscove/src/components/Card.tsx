import { Link } from "react-router-dom";
import { Cat, CatCardProps } from "../Interface";

const Card: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <article className="card">
      <Link to={`/gallery/${cat.id}`}>
      <img src={cat.image} alt={cat.name} />
      <h2>{cat.name}</h2>
      </Link>
    </article>
  );
};

export default Card;
