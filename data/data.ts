const phone = "93731111533";
const message = encodeURIComponent(
    "Bonjour, je souhaite commander ce plat 🍽️"
);

export const mainMealsData = [
  {
    image: "/meals/grilled.png",
    title: "Crème brûlée",
    price: { primary: 9.0, secondary: 7.0 },
    currency: "€",
    description:
      "A shawarma like kebab served with chicken breast and beef meat",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    image: "/maxi-kebab.png",
    title: "Fricadelle",
    price: { primary: 8.0, secondary: 6.0 },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    image: "/barbecue.jpg",
    title: "Barbecue",
    price: { primary: 12.9, secondary: 10.9 },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
];

export const assiettesMenu = [
  {
    title: "Boeuf, Poulet, Mix",
    image: "/meals/grilled.png",
    price: {
      primary: 12,
      secondary: 11,
    },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Mexicanos",
    image: "/images/assiettes/mexicanos.png",
    price: {
      primary: 12,
      secondary: 11,
    },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Brochette Dinde",
    image: "/images/assiettes/brochette-dinde.png",
    price: {
      primary: 14,
      secondary: 13,
    },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Falafel",
    image: "/images/assiettes/falafel.png",
    price: {
      primary: 11,
      secondary: 10,
    },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Grillade",
    image: "/images/assiettes/grillade.png",
    price: {
      primary: 15,
      secondary: 14,
    },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Kefta",
    image: "/images/assiettes/kefta.png",
    price: {
      primary: 14,
      secondary: 13,
    },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Merguez",
    image: "/images/assiettes/merguez.png",
    description:
      "Grilled merguez sausages served with rice, fries, fresh salad, and house sauces.",
    price: {
      primary: 14,
      secondary: 13,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Fricadelle",
    image: "/images/assiettes/fricadelle.png",
    description:
      "Fricadelle sausages served on a plate with fries, rice, fresh vegetables, and sauce.",
    price: {
      primary: 12,
      secondary: 11,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Steak",
    image: "/images/assiettes/steak.png",
    description:
      "Grilled beef steak served with rice, fries, mixed salad, and chef’s sauce.",
    price: {
      primary: 14,
      secondary: 13,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Sandwich Froid (Surimi, Thon)",
    image: "/images/assiettes/sandwich-froid.png",
    description:
      "Cold sandwich filled with surimi or tuna, fresh salad, and light sauce.",
    price: {
      primary: 7,
      secondary: 5,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Burgers",
    image: "/images/assiettes/burger.png",
    description:
      "Juicy beef burger with cheese, salad, and sauce. Optional potato galette or double meat available.",
    price: {
      primary: 8.5,
      secondary: 6.5,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Paninis (Au choix)",
    image: "/images/assiettes/panini.png",
    description:
      "Grilled panini sandwich with your choice of filling, served hot and crispy.",
    price: {
      primary: 8,
      secondary: 6,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Riz Afghan",
    image: "/images/assiettes/riz-afghan.png",
    description:
      "Traditional Afghan rice dish with spiced meat and aromatic rice.",
    price: {
      primary: 8,
      secondary: 5,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
];

export const kebabSandwichMenu = [
  {
    title: "Kebab",
    image: "/images/kebab/kebab.png",
    description:
      "Classic kebab sandwich with shaved meat, fresh salad, and house sauce served in soft bread.",
    price: {
      primary: 9,
      secondary: 7,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Maxi Kebab",
    image: "/images/kebab/maxi-kebab.png",
    description:
      "Extra-large kebab sandwich with generous meat portion, fresh vegetables, and creamy sauce.",
    price: {
      primary: 12.5,
      secondary: 10.5,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Kefta ou Brochette, Merguez ou Steak",
    image: "/images/kebab/kefta-brochette-merguez-steak.png",
    description:
      "Sandwich of your choice: kefta, brochette, merguez, or steak, served with salad and sauce.",
    price: {
      primary: 9.5,
      secondary: 7.5,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Maxi Kefta ou Brochette, Merguez ou Steak",
    image: "/images/kebab/maxi-kefta-brochette-merguez-steak.png",
    description:
      "Maxi-sized sandwich with your choice of kefta, brochette, merguez, or steak and fresh toppings.",
    price: {
      primary: 13,
      secondary: 11,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Falafel",
    image: "/images/kebab/falafel.png",
    description:
      "Vegetarian falafel sandwich with crispy chickpea balls, salad, and creamy sauce.",
    price: {
      primary: 8,
      secondary: 6,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Fricadelle",
    image: "/images/kebab/fricadelle.png",
    description:
      "Fricadelle sandwich with grilled sausage, fresh vegetables, and signature sauce.",
    price: {
      primary: 8.5,
      secondary: 6.5,
    },
    currency: "€",
   whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Tacos",
    image: "/images/kebab/tacos.png",
    description:
      "Grilled tacos filled with seasoned meat, melted cheese, and sauce. Second meat +1.50€.",
    price: {
      primary: 9.5,
      secondary: 7.5,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
];

export const galetteMenu = [
  {
    title: "Galette Kebab",
    image: "/images/galette/galette-kebab.png",
    description:
      "Galette wrap filled with kebab meat, fresh salad, and house sauce.",
    price: {
      primary: 9.5,
      secondary: 7.5,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Maxi Galette Kebab",
    image: "/images/galette/maxi-galette-kebab.png",
    description:
      "Maxi-sized galette wrap with extra kebab meat, fresh vegetables, and sauce.",
    price: {
      primary: 13,
      secondary: 11,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Galette Kefta ou Brochette Poulet ou Merguez",
    image: "/images/galette/galette-kefta-brochette-poulet-merguez.png",
    description:
      "Galette wrap with your choice of kefta, chicken brochette, or merguez, served with salad and sauce.",
    price: {
      primary: 10,
      secondary: 8,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Maxi Galette Kefta ou Brochette Poulet ou Merguez",
    image: "/images/galette/maxi-galette-kefta-brochette-poulet-merguez.png",
    description:
      "Maxi galette wrap with your choice of kefta, chicken brochette, or merguez and generous filling.",
    price: {
      primary: 13.5,
      secondary: 11.5,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Galette Falafel",
    image: "/images/galette/galette-falafel.png",
    description:
      "Vegetarian galette wrap filled with crispy falafel, fresh salad, and creamy sauce.",
    price: {
      primary: 8.5,
      secondary: 6.5,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
  {
    title: "Galette Maxicanos ou Fricadelle",
    image: "/images/galette/galette-maxicanos-fricadelle.png",
    description:
      "Galette wrap with your choice of maxicanos or fricadelle, served hot with salad and sauce.",
    price: {
      primary: 9,
      secondary: 7,
    },
    currency: "€",
    whatsapp: `https://wa.me/${phone}?text=${message}`,
    phone,
  },
];
