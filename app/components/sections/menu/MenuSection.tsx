import MainCard from "@/app/components/sections/menu/menuCards/MainCard";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-gray-100">
      <div className="container m-auto flex flex-col items-center py-20 justify-center">
        {/* Main meals */}
        <div className="w-full flex flex-wrap items-center justify-center gap-5 lg:gap-10">
          <MainCard />
          <MainCard />
          <MainCard />
        </div>
      </div>
    </section>
  );
}
