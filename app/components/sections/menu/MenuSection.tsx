import MainCard from "@/app/components/sections/menu/components/MainCard";
import Assiette from "@/app/components/sections/menu/Assiette";

const mainMealsData = [
  {
    image: "/kefta-ou-merquez.jpg",
    title: "Kebab",
    price: { prixMenu: "9.00", prixSeul: "7.00" },
    currency: "€",
    description:
      "A shawarma like kebab served with chicken breast and beef meat",
    whatsapp: "#",
    phone: "#",
  },
  {
    image: "/maxi-kebab.png",
    title: "Fricadelle",
    price: { prixMenu: "8.00", prixSeul: "6.00" },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: "#",
    phone: "#",
  },
  {
    image: "/barbecue.jpg",
    title: "Barbecue",
    price: { prixMenu: "12.90", prixSeul: "10.90" },
    currency: "€",
    description:
      "A juicy chicken patty served on a bun with lettuce, tomato, and mayo.",
    whatsapp: "#",
    phone: "#",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-gray-200 lg:bg-gray-100">
      <div className="container m-auto px-5 flex flex-col items-center py-5 lg:py-20 justify-center">
        {/* Main meals */}
        <div className="w-full flex flex-wrap items-center justify-center gap-5 lg:gap-10 pb-14 lg:pb-20">
          {mainMealsData.map((item, index) => (
            <MainCard key={index} {...item} />
          ))}
        </div>

        <Assiette />
      </div>
    </section>
  );
}
