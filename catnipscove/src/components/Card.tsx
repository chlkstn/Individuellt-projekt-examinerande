import { Link } from "react-router-dom";
import { CatCardProps } from "../Interface";

const Card: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <article className={cat.booked ? "card card-booked" : "card"}>
      <Link to={`/gallery/${cat.id}`}>
        <img src={cat.image} alt={cat.name} />
        <h2>{cat.name}</h2>
        {cat.booked ? <p>This cat is booked</p> : <p></p>}
      </Link>
    </article>
  );
};

export default Card;
