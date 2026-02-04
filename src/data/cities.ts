export interface City {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  area: string; // grid-area name
}

export const cities: City[] = [
  {
    id: 1,
    name: "Jufureh",
    slug: "jufureh",
    image: "/images/destinations/jufureh.jpg",
    description: "Historic town linked to Kunta Kinteh and local heritage.",
    area: "large",
  },
  {
    id: 2,
    name: "Tanjeh",
    slug: "tanjeh",
    image: "/images/cities/tanjeh.jpg",
    description: "Coastal village with beautiful sea views.",
    area: "small1",
  },
  {
    id: 3,
    name: "Banjul – Albert Market",
    slug: "albert-market",
    image: "/images/cities/albert-market.jpg",
    description: "Bustling local market and cultural hub.",
    area: "wide",
  },
  {
    id: 4,
    name: "Serekunda Market",
    slug: "serekunda",
    image: "/images/cities/arch22.jpg",
    description: "The heart of daily Gambian life.",
    area: "small2",
  },
  {
    id: 5,
    name: "Arch 22",
    slug: "arch-22",
    image: "/images/cities/arch22.jpg",
    description: "Iconic monument with city views.",
    area: "small3",
  },
];
