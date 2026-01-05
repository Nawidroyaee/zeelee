import HeroSection from "@/app/components/sections/hero/HeroSection";
import MenuSection from "@/app/components/sections/menu/MenuSection";
import ContactSection from "@/app/components/sections/contact/ContactSection";

export default function Home() {
  return (
    <main className="pt-16 z-10">
      <HeroSection />
      <MenuSection />
      <ContactSection />
    </main>
  );
}
