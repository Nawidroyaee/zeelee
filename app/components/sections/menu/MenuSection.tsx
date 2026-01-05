import MainCard from "@/app/components/sections/menu/components/MainCard";
import Assiette from "@/app/components/sections/menu/Assiette";
import { mainMealsData } from "@/data/data";
import KebabSandwich from "@/app/components/sections/menu/KebabSandwich";
import Galette from "@/app/components/sections/menu/Galette";

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
        <KebabSandwich />
        <Galette />
      </div>
    </section>
  );
}
