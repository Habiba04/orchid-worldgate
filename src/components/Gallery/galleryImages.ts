export type GalleryCategory = "fresh" | "frozen" | "processed" | "real-life";

export interface GalleryImage {
  path: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  // fresh food
  { path: "v1783963553/OWG/Gallery/Fresh/pomegranate.png", alt: "pomegranate", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/strawberry.png", alt: "strawberries", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/Peppers.png", alt: "Peppers", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/Onions.png", alt: "onions", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/barhy.png", alt: "barhy dates", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/Green-onions.png", alt: "Green onions", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/green-beans.png", alt: "green beans", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/peas.png", alt: "peas", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/Asparagus.png", alt: "Asparagus", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/grapes.png", alt: "grapes", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/potatoes.png", alt: "potatoes", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/cucumber.png", alt: "mini cucumbers", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/dry-garlic.png", alt: "dry garlic", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/beans2.png", alt: "green beans", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/garlic.png", alt: "garlic", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/Spring-onions.png", alt: "Spring onions", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/beans1.png", alt: "green beans", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/Mango.png", alt: "mango", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/Melons.png", alt: "melons", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/Watermelons.png", alt: "Watermelon", category: "fresh" },
  { path: "v1783963553/OWG/Gallery/Fresh/mango3.png", alt: "Mango", category: "fresh" },

  // frozen food
  { path: "v1783963553/OWG/Gallery/Frozen/broccoli.png", alt: "Frozen Broccoli", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/cauliflower.png", alt: "Frozen Cauliflower", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/eggplant.png", alt: "Frozen Grilled Eggplant", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/fries.png", alt: "Frozen Fries", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/peas.png", alt: "Frozen Peas", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/green-beans.png", alt: "Frozen Green Beans", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/molokhia.png", alt: "Frozen Molokhia", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/mango.png", alt: "Frozen Mango", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/okra.png", alt: "Frozen Okra", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/strawberries.png", alt: "Frozen Strawberries", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/Veggies.png", alt: "Frozen Veggies", category: "frozen" },
  { path: "v1783963553/OWG/Gallery/Frozen/artichokes.png", alt: "Frozen Artichokes", category: "frozen" },

  // processed food
  { path: "v1783963553/OWG/Gallery/Processed/Flour_package.png", alt: "Flour", category: "processed" },
  { path: "v1783963553/OWG/Gallery/Processed/Pasta.png", alt: "Pasta", category: "processed" },
  { path: "v1783963553/OWG/Gallery/Processed/Tomato_sauce.png", alt: "Tomato Sauce", category: "processed" },
  { path: "v1783963553/OWG/Gallery/Processed/Red_sauce_sachet.png", alt: "Red Sauce Sachet", category: "processed" },
  { path: "v1783963553/OWG/Gallery/Processed/Red_sauce_can.png", alt: "Red Sauce Can", category: "processed" },

  // real life / on-site
  { path: "v1783963553/OWG/Gallery/Real/Frozen.jpg", alt: "Frozen", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/veggies2.jpeg", alt: "vegetables", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/tomatoes.jpeg", alt: "tomatoes", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/strawberry2.jpeg", alt: "strawberries", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/strawberry3.jpeg", alt: "strawberries", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/strawberry4.jpeg", alt: "strawberries", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/cucumbers2.jpeg", alt: "cucumbers", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/barhy2.jpeg", alt: "barhy dates", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/beans3.jpeg", alt: "beans", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/beans4.jpeg", alt: "beans", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/beans5.jpeg", alt: "beans", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/Proccessed.jpg", alt: "processed", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/garlic2.jpeg", alt: "garlic", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/harvest.jpg", alt: "harvest", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/mango2.jpeg", alt: "mango", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/pomegranate2.jpeg", alt: "pomegranate", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/spring-onions2.jpeg", alt: "spring onions", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/sauce-cans.jpeg", alt: "sauce cans", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/sauce-ingrediants.jpeg", alt: "sauce ingrediants", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/sauce-box.jpeg", alt: "sauce box", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/trucks-load.jpeg", alt: "trucks load", category: "real-life" },
  { path: "v1783963553/OWG/Gallery/Real/trucks.jpeg", alt: "trucks", category: "real-life" },
];
