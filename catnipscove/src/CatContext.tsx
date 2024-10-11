import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { Cat, CatContextType } from "./Interface"; // Import necessary interfaces

// Create the context
const CatContext = createContext<CatContextType | undefined>(undefined);

export const CatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for errors

  // Function to load cats from local storage
  const loadCatsFromLocalStorage = () => {
    const savedCats = localStorage.getItem("cats"); // Retrieve cats from local storage
    if (savedCats) {
      return JSON.parse(savedCats); // Parse the stored JSON string
    }
    return null;
  };

  // On component mount, fetch from localStorage or JSON file
  useEffect(() => {
    const savedCats = loadCatsFromLocalStorage(); // Load cats from local storage

    if (savedCats) {
      setCats(savedCats); // Use the saved cats if available
      setLoading(false); // No need to fetch from server
    } else {
      // Fetch cats from JSON if no local storage data
      const fetchCats = async () => {
        try {
          const response = await fetch("/data.json");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setCats(data.cats); // Assuming the data has a 'cats' array
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchCats();
    }
  }, []);

  // Function to add a new cat to the array
  const addCat = (newCat: Cat) => {
    // Find the maximum existing ID in the cats array
    const maxId = cats.length > 0 ? Math.max(...cats.map((cat) => cat.id)) : 0;

    // Assign a new unique ID by incrementing the maximum ID
    const catWithId = { ...newCat, id: maxId + 1 };

    // Update the cats array with the new cat
    const updatedCats = [...cats, catWithId];
    setCats(updatedCats);
    localStorage.setItem("cats", JSON.stringify(updatedCats)); // Persist to local storage if needed
  };

  return (
    <CatContext.Provider value={{ cats, addCat, loading, error }}>
      {children}
    </CatContext.Provider>
  );
};

// Custom hook to use the context
export const useCats = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error("useCats must be used within a CatProvider");
  }
  return context;
};
