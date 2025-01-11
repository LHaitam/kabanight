import { useEffect } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";
import kabaLogo from "@/public/images/kaba.png"; // Assurez-vous que l'image est dans ce chemin


interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  useEffect(() => {
    // Ajout du script uniquement une fois le composant monté
    const script = document.createElement("script");
    script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyage du script pour éviter les conflits si le composant est démonté
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={kabaLogo}
            alt="KABANIGHT Logo"
            className="w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem]" // Ajustez la taille si nécessaire
          />
          <h1 className="text-[20px] sm:text-[30px] font-semibold">
            KABANIGHT
          </h1>
        </div>
        {/* Nav links */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[20px] font-medium hover:text-orange-600">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-orange-600">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 hover:bg-orange-400 transition-all duration-200 bg-orange-500 flex items-center rounded-md text-white">
            <span
              data-glf-cuid="d87e0da0-0c38-4f19-8749-a9cc186f08cd"
              data-glf-ruid="8d626c73-2725-4add-a3d6-f83bc723058c"
            >
              Voir Menu & Commander
            </span>
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className="lg:hidden w-[2rem] h-[2rem] text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
