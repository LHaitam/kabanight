import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

import kabaLogo from "@/public/images/kaba.png"; // Assurez-vous que l'image est dans ce chemin

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#120A05]"> {/* Fond marron foncé */}
      <div className="w-[80%] pb-[2rem] border-b-[2px]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-start">
        {/* 1st part */}
        <div>
          {/* Logo */}
          <div className="flex items-center text-white space-x-2">
            <Image
              src={kabaLogo}
              alt="KABANIGHT Logo"
              className="w-[1.4rem] h-[1.4rem] sm:w-[2rem] sm:h-[2rem]" // Ajustez la taille si nécessaire
            />
            <h1 className="text-[20px] sm:text-[30px] font-semibold ">
              KABANIGHT
            </h1>
          </div>
          <p className="text-white text-opacity-80 mt-[0.4rem]">
            Quand la faim frappe la nuit, KABANIGHT répond présent ! Burgers, tacos et plus encore.
          </p>
          <p className="text-orange-400 text-[19px] font-bold">
            +33 7 58 748184
          </p>
        </div>
        {/* 2nd part */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] uppercase text-white">
            Nos Spécialités
          </h1>
          <p className="mt-[0.7rem] text-white opacity-80 hover:text-[#FF4500] transition-all duration-200 cursor-pointer w-fit">
            Le Colossal
          </p>
          <p className="mt-[0.7rem] text-white opacity-80 hover:text-[#FF4500] transition-all duration-200 cursor-pointer w-fit">
            Le Montagnard
          </p>
          <p className="mt-[0.7rem] text-white opacity-80 hover:text-[#FF4500] transition-all duration-200 cursor-pointer w-fit">
            Le Chick-BB
          </p>
          <p className="mt-[0.7rem] text-white opacity-80 hover:text-[#FF4500] transition-all duration-200 cursor-pointer w-fit">
            Le Berger Sucré
          </p>
          <p className="mt-[0.7rem] text-white opacity-80 hover:text-[#FF4500] transition-all duration-200 cursor-pointer w-fit">
            Tacos personnalisables
          </p>
        </div>
        {/* 3rd part */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] uppercase text-white">
            Horaires d'Ouverture
          </h1>
          <p className="text-white text-[18px]">
            Lundi - Dimanche :{" "}
            <span className="text-orange-400">20h - 4h</span>
          </p>
          <p className="text-white text-[18px]">
            Lundi - Vendredi (Offre Étudiante) :{" "}
            <span className="text-orange-400">11h - 14h30</span>
          </p>
          {/* Social icons */}
          <div className="flex mt-[2rem] items-center space-x-6">
            <FaInstagram className="w-[1.5rem] h-[1.5rem] text-orange-400" />
          </div>
        </div>
      </div>
      {/* Copyright text */}
      <p className="text-center text-white opacity-80 mt-[1.5rem]">
        Copyright © 2024{" "}
        <span className="text-orange-400">KABANIGHT</span>. Tous droits réservés
      </p>
    </div>
  );
};

export default Footer;
