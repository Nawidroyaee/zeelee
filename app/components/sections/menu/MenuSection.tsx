import MainCard from "@/app/components/sections/menu/menuCards/MainCard";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-gray-200 lg:bg-gray-100">
      <div className="container m-auto px-5 flex flex-col items-center py-5 lg:py-20 justify-center">
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
