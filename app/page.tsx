import HeroSection from "@/app/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="pt-16 z-10">
      <HeroSection />
      <p
        id="menu"
        className="h-dvh bg-gray-100 flex items-center justify-center"
      >
        Menu section
      </p>
      <p
        id="contact"
        className="h-dvh bg-green-100 flex items-center justify-center"
      >
        Contact section
      </p>
    </main>
  );
}
