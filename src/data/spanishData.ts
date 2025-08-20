export type SpanishFoodsProp = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const spanishFoods: SpanishFoodsProp[] = [
  {
    id: 1,
    name: "Paella Valenciana",
    description:
      "A traditional rice dish from Valencia made with rabbit, chicken, green beans, and sometimes snails, seasoned with saffron.",
    price: 18.99,
    image: "/images/paella.jpg",
  },
  {
    id: 2,
    name: "Patatas Bravas",
    description:
      "Crispy fried potatoes served with a spicy tomato-based sauce or aioli.",
    price: 6.5,
    image: "/images/patatas.jpg",
  },
  {
    id: 3,
    name: "Gazpacho",
    description:
      "A refreshing cold soup made with tomatoes, cucumbers, peppers, and garlic, typical of Andalusia.",
    price: 5.95,
    image: "/images/gazpacho.jpg",
  },
  {
    id: 4,
    name: "Pimientos de Padrón",
    description:
      "Small green peppers fried in olive oil and sprinkled with sea salt, some spicy, most mild.",
    price: 7.0,
    image: "/images/pimientos.jpg",
  },
  {
    id: 5,
    name: "Fideuà",
    description:
      "A seafood dish similar to paella but made with short noodles instead of rice, typically includes squid and shellfish.",
    price: 17.5,
    image: "/images/fideua.jpg",
  },
  {
    id: 6,
    name: "Jamón",
    description:
      "Cured Spanish ham, often served thinly sliced as a tapa, with varieties such as Jamón Serrano and Jamón Ibérico.",
    price: 12.0,
    image: "/images/jamon.jpg",
  },
  {
    id: 7,
    name: "Tortilla Española",
    description:
      "A classic Spanish omelet made with eggs, potatoes, and onions, served warm or cold.",
    price: 8.75,
    image: "/images/tortilla.jpg",
  },
  {
    id: 8,
    name: "Churros",
    description:
      "Fried dough pastries served with thick hot chocolate for dipping, popular for breakfast or dessert.",
    price: 4.25,
    image: "/images/churros.jpg",
  },
];

export default spanishFoods;
