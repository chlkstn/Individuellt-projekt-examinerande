// interfaces.ts

// Interface representing an individual cat
export interface Cat {
    id: number;
    name: string;
    age: number;
    race: string;
    eyecolor: string;
    image: string;
    description: string;
  }
  
  // Interface representing the entire data structure
  export interface CatnipsCove {
    title: string;
    cats: Cat[];
  }
  
  export interface CatCardProps {
    cat: Cat;
  }