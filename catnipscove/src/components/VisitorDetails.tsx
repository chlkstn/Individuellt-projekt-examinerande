import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVisitors } from "../VisitorContext";
import { useCats } from "../CatContext";
import { Visitor, Cat } from "../Interface";

const VisitorDetails: React.FC = () => {
  const { visitors } = useVisitors();
  const { cats } = useCats();
  const { catId } = useParams<{ catId: string }>(); // Get catId from route parameters
  const [visitorInfo, setVisitorInfo] = useState<
    { visitor: Visitor; cat: Cat | undefined } | null
  >(null);

  useEffect(() => {
    if (catId) {
      // Find the visitor with the corresponding catId
      const visitor = visitors.find((visitor) => visitor.catId === parseInt(catId));
      const cat = cats.find((cat) => cat.id === parseInt(catId));
      if (visitor) {
        setVisitorInfo({ visitor, cat });
      }
    }
  }, [catId, visitors, cats]);

  if (!visitorInfo) {
    return <div>No visitor details available</div>;
  }

  const { visitor, cat } = visitorInfo;

  return (
    <section className="visitor-details">
      <h2>Visitor Details</h2>
      <h2>Cat: {cat.name}</h2>
      <div className="visitor-card">
        <h3>
          {visitor.firstname} {visitor.lastname}
        </h3>
        <p>Phone: {visitor.phone}</p>
        <p>Email: {visitor.email}</p>
        <p>Message: {visitor.message}</p>
        
      </div>
    </section>
  );
};

export default VisitorDetails;
