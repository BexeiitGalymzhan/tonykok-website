export type ProjectsProp = {
  id?: number;
  title: string;
  description: string;
  image: string;
};

export const projects = [
  {
    id: 1,
    title: "Modern Residential Complex",
    description:
      "A large-scale residential development consisting of 120 eco-friendly apartments designed for modern living. Each unit is equipped with smart home systems and built using energy-efficient materials that reduce environmental impact. The complex features landscaped green spaces, playgrounds, and community areas that create a comfortable and safe environment for families. Solar panels and advanced insulation systems ensure lower utility costs and long-term sustainability.",
    image: "/concrete-house.jpg",
  },
  {
    id: 2,
    title: "Corporate Office Tower",
    description:
      "A state-of-the-art high-rise office building located in the heart of the business district. The tower offers premium workspaces with open floor plans, designed to maximize natural light through its glass facade. It includes underground parking, a modern lobby with reception services, and multiple conference halls. The building emphasizes sustainability with a rooftop garden, energy-saving HVAC systems, and advanced safety measures. Designed to meet international standards, it provides a productive and inspiring workplace for leading companies.",
    image: "/concrete-house.jpg",
  },
  {
    id: 3,
    title: "Luxury Villa",
    description:
      "A private luxury villa designed with minimalist architecture and high attention to detail. The villa features open-plan living spaces with floor-to-ceiling windows that blend indoor comfort with outdoor beauty. It includes a spacious infinity pool, landscaped gardens, and a terrace with panoramic views. Premium natural materials such as stone and wood are used throughout the construction, emphasizing elegance and durability. The design balances modern luxury with functionality, offering a private sanctuary for relaxation and comfort.",
    image: "/concrete-house.jpg",
  },
];
