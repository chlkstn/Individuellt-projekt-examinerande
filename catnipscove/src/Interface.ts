// Interface representing an individual cat
export interface Cat {
  id: number;
  name: string;
  age: number;
  race: string;
  eyecolor: string;
  image: string;
  description: string;
  booked: boolean;
}

// Interface representing the entire data structure
export interface CatnipsCove {
  title: string;
  cats: Cat[];
}

export interface CatCardProps {
  cat: Cat;
}

// Interface for my context where I want to put my array of cats
export interface CatContextType {
  cats: Cat[];
  addCat: (newCat: Cat) => void;
  loading: boolean; // Loading state
  error: string | null; // Error state
}

// Interface for UseLogin
export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Interface for Visitors
export interface Visitor {
  id: number;
  firstname: string;
  lastname: string;
  phone: number;
  email: string;
  message: string;
  catId: number; 
}

export interface VisitorContextType {
  visitors: Visitor[];
  addVisitor: (visitor: Visitor) => void;
}

export interface VisitorAction {
  type: "ADD_VISITOR";
  payload: Visitor;
}