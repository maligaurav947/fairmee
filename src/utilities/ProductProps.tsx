export interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  amazonLink: string;
  meeshoLink: string;
  ingredients: string[];
  skinType: string;
  directions: string;
  warnings: string[];
  madeIn: string;
  brand: string;
  buyLink?: string;
  ratings: {
    average: number;
    reviews: number;
  };
}
