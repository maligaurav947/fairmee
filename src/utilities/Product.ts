import bodyLotionLocal from "../assets/bodyloation.jpg";
import glow1 from "../assets/glowcreamfirst.jpg";
import glow2 from "../assets/glowcreamsecound.jpg";
import glowMockUp from "../assets/glowskimMockUp.jpg";
import glowCreamBanner from "../assets/GlowCreamBanner.jpg";
import achinemMockUp from "../assets/achinemMockUp.jpg";
import AntiAcneCreamBranner from "../assets/AntiAcneCreamBranner.jpg";
const products = [
  {
    id: "1",
    name: "Sarvadnya's Fairmee Acne & Melasma Cream - 30g | Reduces acne, prevents breakouts, fades melasma & hyperpigmentation, promotes even skin tone | Unisex",

    images: [
      "https://m.media-amazon.com/images/I/61JCSRlSlyL._SX522_.jpg",
      achinemMockUp,
      AntiAcneCreamBranner,
    ],
    description:
      "Keep your skin soft and glowing with our hydrating face cream, perfect for daily use.",
    amazonLink: "https://amzn.in/d/eJhJZu3",
    meeshoLink: "https://www.meesho.com/s/p/7l8jus?utm_source=s_cc",
    ingredients: [
      "Niacinamide",
      "Kojic Acid",
      "Alpha Arbutin",
      "Vitamin C",
      "Glycolic Acid",
    ],
    skinType: "Suitable for all skin types, including oily and sensitive skin",
    directions:
      "Apply a thin layer to cleansed face twice daily. For best results, use sunscreen during the day.",
    warnings: [
      "For external use only",
      "Avoid direct contact with eyes",
      "Discontinue use if irritation occurs",
    ],
    madeIn: "India",
    brand: "Sudarshan Cosmetics",
  },

  {
    id: "2",
    name: "Sarvadnya's Fairmee Hydrating Body Lotion - 100ml | Deeply hydrates, softens, smooths rough patches, improves skin health, reduces aging signs, enhances natural radiance | Unisex",
    images: [
      bodyLotionLocal,
      "https://m.media-amazon.com/images/I/61vCeOJuO8L._SX522_.jpg",
    ],
    description:
      "A nourishing body lotion enriched with natural ingredients to provide deep hydration and keep your skin soft and smooth.",

    amazonLink: "https://amzn.in/d/7sLVkUR",
    meeshoLink: "https://www.meesho.com/s/p/7s78c1?utm_source=s_cc",
    ingredients: [
      "Aqua",
      "Glycerin",
      "Cetearyl Alcohol",
      "Dimethicone",
      "Fragrance",
    ],
    skinType: "All skin types",
    directions:
      "Apply generously to the body after a shower or as needed. Massage gently until fully absorbed.",
    warnings: [
      "For external use only.",
      "Avoid contact with eyes.",
      "Keep out of reach of children.",
    ],
    madeIn: "India",
    brand: "Sudarshan Cosmetics",
  },
  {
    id: "3",
    name: "Sarvadnya's Fairmee Glow Cream - 30g | Hydrates, softens, reduces aging signs, improves radiance & skin health, helps with melasma & acne | Unisex",
    images: [glow1, glow2, glowMockUp, glowCreamBanner],
    description:
      "A nourishing glow cream enriched with natural ingredients to provide deep hydration and keep your skin soft and radiant.",
    amazonLink: "https://amzn.in/d/bGthcAJ",
    meeshoLink: "https://www.meesho.com/s/p/7si02d?utm_source=s_cc",

    ingredients: [
      "Aloe Vera Extract",
      "Saffron",
      "Rose Oil",
      "Cucumber Extract",
      "Shea Butter",
      "Grape Seed Oil",
      "Licorice",
      "Apple Extract",
      "Sweet Almond Oil",
      "Basil Leaf Extract",
    ],
    skinType: "All skin types",
    directions:
      "Apply a generous amount to the face and neck after cleansing. Massage gently in upward strokes until fully absorbed.",
    warnings: [
      "For external use only.",
      "Avoid contact with eyes.",
      "Keep out of reach of children.",
    ],
    madeIn: "India",
    brand: "Sudarshan Cosmetics",
  },
];

export default products;
