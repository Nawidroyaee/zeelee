import HeroSection from "@/app/components/sections/HeroSection";
import MenuSection from "@/app/components/sections/menu/MenuSection";

export default function Home() {
  return (
    <main className="pt-16 z-10">
      <HeroSection />
      <MenuSection />
      <p
        id="contact"
        className="h-dvh bg-green-100 flex items-center justify-center"
      >
        Contact section
      </p>
    </main>
  );
}
