import { galetteMenu } from "@/data/data";
import AssietteCard from "@/app/components/sections/menu/components/AssietteCard";

export default function Galette() {
  return (
    <div className="flex flex-col w-full  mb-10 lg:mb-20">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-start mx-10 font-heading text-green-500 mb-5 lg:mb-10">
        Galette:
      </h1>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-5 px-0 flex-wrap">
        {/*cards*/}
        {galetteMenu.map((assiette, index) => (
          <AssietteCard key={index} {...assiette} />
        ))}
      </div>
    </div>
  );
}
