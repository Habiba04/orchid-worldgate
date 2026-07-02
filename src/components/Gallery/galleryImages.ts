export type GalleryCategory = "fresh" | "frozen" | "processed" | "real-life";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  // fresh food
  {
    src: "/assets/gallery/Fresh/pomegranate.png",
    alt: "pomegranate",
    category: "fresh",
  },
  {
    src: "/assets/gallery/Fresh/strawberry.png",
    alt: "strawberries",
    category: "fresh",
  },
  {
    src: "/assets/gallery/Fresh/Peppers.png",
    alt: "Peppers",
    category: "fresh",
  },
  { src: "/assets/gallery/Fresh/Onions.png", alt: "onions", category: "fresh" },
  {
    src: "/assets/gallery/Fresh/barhy.png",
    alt: "barhy dates",
    category: "fresh",
  },
  {
    src: "/assets/gallery/Fresh/Green-onions.png",
    alt: "Green onions",
    category: "fresh",
  },
  {
    src: "/assets/gallery/Fresh/green-beans.png",
    alt: "green beans",
    category: "fresh",
  },
  { src: "/assets/gallery/Fresh/peas.png", alt: "peas", category: "fresh" },
  {
    src: "/assets/gallery/Fresh/Asparagus.png",
    alt: "Asparagus",
    category: "fresh",
  },
  { src: "/assets/gallery/Fresh/grapes.png", alt: "grapes", category: "fresh" },
  {
    src: "/assets/gallery/Fresh/potatoes.png",
    alt: "potatoes",
    category: "fresh",
  },
  {
    src: "/assets/gallery/Fresh/cucumber.png",
    alt: "mini cucumbers",
    category: "fresh",
  },
  {
    src: "/assets/gallery/Fresh/dry-garlic.png",
    alt: "dry garlic",
    category: "fresh",
  },
  {
    src: "/assets/gallery/Fresh/beans2.png",
    alt: "green beans",
    category: "fresh",
  },
  { src: "/assets/gallery/Fresh/garlic.png", alt: "garlic", category: "fresh" },
  {
    src: "/assets/gallery/Fresh/Spring-onions.png",
    alt: "Spring onions",
    category: "fresh",
  },
  {
    src: "/assets/gallery/Fresh/beans1.png",
    alt: "green beans",
    category: "fresh",
  },
  { src: "/assets/gallery/Fresh/Mango.png", alt: "mango", category: "fresh" },
  { src: "/assets/gallery/Fresh/Melons.png", alt: "melons", category: "fresh" },
  {
    src: "/assets/gallery/Fresh/Watermelons.png",
    alt: "Watermelon",
    category: "fresh",
  },
  { src: "/assets/gallery/Fresh/mango3.png", alt: "Mango", category: "fresh" },

  // frozen food
  {
    src: "/assets/gallery/Frozen/broccoli.png",
    alt: "Frozen Broccoli",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/cauliflower.png",
    alt: "Frozen Cauliflower",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/eggplannt.png",
    alt: "Frozen Grilled Eggplant",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/fries.png",
    alt: "Frozen Fries",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/peas.png",
    alt: "Frozen Peas",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/green-beans.png",
    alt: "Frozen Green Beans",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/molokhia.png",
    alt: "Frozen Molokhia",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/mango.png",
    alt: "Frozen Mango",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/okra.png",
    alt: "Frozen Okra",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/strawberries.png",
    alt: "Frozen Strawberries",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/Veggies.png",
    alt: "Frozen Veggies",
    category: "frozen",
  },
  {
    src: "/assets/gallery/Frozen/artichokes.png",
    alt: "Frozen Artichokes",
    category: "frozen",
  },

  // processed food
  {
    src: "/assets/gallery/Processed/flour.png",
    alt: "Flour",
    category: "processed",
  },
  {
    src: "/assets/gallery/Processed/Pasta.png",
    alt: "Pasta",
    category: "processed",
  },
  {
    src: "/assets/gallery/Processed/Tomato-sauce.png",
    alt: "Tomato Sauce",
    category: "processed",
  },
  {
    src: "/assets/gallery/Processed/Red-sauce-sachet.png",
    alt: "Red Sauce Sachet",
    category: "processed",
  },
  {
    src: "/assets/gallery/Processed/red-sauce-can.png",
    alt: "Red Sauce Can",
    category: "processed",
  },

  // real life / on-site
  {
    src: "/assets/gallery/Real/Frozen.jpg",
    alt: "Frozen",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/veggies2.jpeg",
    alt: "vegetables",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/tomatoes.jpeg",
    alt: "tomatoes",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/strawberry2.jpeg",
    alt: "strawberries",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/strawberry3.jpeg",
    alt: "strawberries",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/strawberry4.jpeg",
    alt: "strawberries",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/cucumbers2.jpeg",
    alt: "cucumbers",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/barhy2.jpeg",
    alt: "barhy dates",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/beans3.jpeg",
    alt: "beans",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/beans4.jpeg",
    alt: "beans",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/beans5.jpeg",
    alt: "beans",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/Proccessed.jpg",
    alt: "processed",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/garlic2.jpeg",
    alt: "garlic",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/harvest.jpg",
    alt: "harvest",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/mango2.jpeg",
    alt: "mango",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/pomegranate2.jpeg",
    alt: "pomegranate",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/spring-onions2.jpeg",
    alt: "spring onions",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/sauce-cans.jpeg",
    alt: "sauce cans",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/sauce-ingrediants.jpeg",
    alt: "sauce ingrediants",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/sauce-box.jpeg",
    alt: "sauce box",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/trucks-load.jpeg",
    alt: "trucks load",
    category: "real-life",
  },
  {
    src: "/assets/gallery/Real/trucks.jpeg",
    alt: "trucks",
    category: "real-life",
  },
];
