import { createContext, useReducer, useContext, useEffect } from "react";
import { Visitor, VisitorContextType, VisitorAction } from "./Interface";

const VisitorContext = createContext<VisitorContextType | undefined>(undefined);

const visitorReducer = (state: Visitor[], action: VisitorAction) => {
  switch (action.type) {
    case "ADD_VISITOR":
      return [...state, action.payload];
    default:
      return state;
  }
};

const VisitorProvider: React.FC = ({ children }) => {
  const [visitors, dispatch] = useReducer(visitorReducer, [], () => {
    const localData = localStorage.getItem("visitors");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }, [visitors]);

  const addVisitor = (visitor: Visitor) => {
    dispatch({ type: "ADD_VISITOR", payload: visitor });
  };

  return (
    <VisitorContext.Provider value={{ visitors, addVisitor }}>
      {children}
    </VisitorContext.Provider>
  );
};

const useVisitors = (): VisitorContextType => {
  const context = useContext(VisitorContext);
  if (!context) {
    throw new Error("useVisitors must be used within a VisitorProvider");
  }
  return context;
};

export { VisitorProvider, useVisitors };