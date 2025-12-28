"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconMenu3 } from "@tabler/icons-react";
import NavbarItems from "@/app/components/header/NavbarItems";
import MobileNavbar from "@/app/components/header/MobileNavbar";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showHeaderOnScroll, setShowHeaderOnScroll] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openDrawer]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeaderOnScroll(false);
      } else {
        setShowHeaderOnScroll(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full transition-transform duration-300 ${
        showHeaderOnScroll ? "translate-y-0" : "-translate-y-full"
      } bg-white backdrop-blur py-2 md:py-4`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Zeelee Logo"
            width={40}
            height={40}
            priority
            unoptimized
          />
        </div>

        <NavbarItems />

        <div className="hidden md:block">
          <a
            href="#menu"
            className="rounded-full bg-green-500 px-5 py-2 text-white font-bold hover:bg-green-600 transition"
          >
            Order Now
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpenDrawer(!openDrawer)}
          aria-label="Open menu"
        >
          <IconMenu3 size={28} />
        </button>
      </div>

      <MobileNavbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </header>
  );
}
