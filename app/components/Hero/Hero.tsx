import React, { useEffect } from "react";
import BurgerImg1 from "@/public/images/b1.png";
import Kaba from "@/public/images/kaba.png";
import Image from "next/image";

const Hero = () => {
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
    <>
      {/* Section Hero */}
      <div
        className="w-[100%] h-[88vh] flex items-center justify-center flex-col md:clip_path"
        style={{
          backgroundImage: "url('/images/bg.png')", // Chemin vers l'image de fond
          backgroundSize: "cover", // S'adapte à la taille de l'écran
          backgroundPosition: "center", // Centre l'image
          backgroundRepeat: "no-repeat", // Empêche la répétition
        }}
      >
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={Kaba} alt="SOBnin" className="hidden md:block" />
          <div>
            <h1 className="text-[30px] font-bold text-[#723f21] hidden md:block">
              KABANIGHT
            </h1>
            <div className="block md:hidden my-4">
              <Image src={Kaba} alt="SOBnin" className="w-full h-auto" />
            </div>
            <h1 className="text-[40px] leading-[3rem] uppercase text-white font-bold  md:block">
              Quand la Faim Frappe la Nuit, <br /> On Répond Présent !
            </h1>
            <h2 className="text-[18px] font-semibold text-white ">
              Craquez pour nos recettes nocturnes qui réveillent vos papilles, jusqu&apos;à l&apos;aube !
            </h2>
            <button className="px-4 py-2 hover:bg-orange-400 transition-all duration-200 bg-orange-500 flex items-center rounded-md text-white">
            <span
              data-glf-cuid="d87e0da0-0c38-4f19-8749-a9cc186f08cd"
              data-glf-ruid="8d626c73-2725-4add-a3d6-f83bc723058c"
            >
              Voir Menu & Commander
            </span>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
