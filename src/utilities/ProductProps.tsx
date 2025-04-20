export type Product = {
  id: string;
  name: string;
  price: string;
  images: string[];
  description: string;
  buyLink: string;
  ingredients: string[];
  skinType: string;
  directions: string;
  warnings: string[];
  ratings: {
    average: number;
    reviews: number;
  };
  madeIn: string;
  brand: string;
  amazonLink: string;
  meeshoLink: string;
};
