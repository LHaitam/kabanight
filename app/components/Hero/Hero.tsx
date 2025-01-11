import React from "react";
import BurgerImg1 from "@/public/images/b1.png";
import Kaba from "@/public/images/kaba.png";
import Image from "next/image";

const Hero = () => {
  const handleOrderClick = () => {
    const phoneNumber = "+212708232723";
    const message = "Je souhaite commander.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /-/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

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
            <button
              onClick={handleOrderClick}
              className="mt-[2rem] px-8 py-3 text-[16px] bg-orange-600 transition-all duration-200 hover:bg-[#F99A07] rounded-md text-white mx-auto block"
            >
              <span className="font-bold">Voir Menu & Commander</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
