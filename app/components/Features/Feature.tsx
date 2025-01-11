import React from "react";
import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";
import Img4 from "@/public/images/f4.jpg";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="pt-[5rem] ">
      {/* Heading */}
      <h1 className="heading">
        COMPOSEZ VOTRE
        <span className="text-orange-500"> TACOS</span>
      </h1>
      {/* Cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {/* 1st card */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img1} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              1. CHOISIS TA BASE
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Sélectionne la taille de ton tacos : M, L ou XL. Pour tous les appétits !
            </p>
          </div>
        </div>
        {/* 2nd card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={Img2} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              2. CHOISIS TA VIANDE
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
            Viande hachée, poulet, cordon bleu ou tenders : fais ton choix gourmand.
            </p>
          </div>
        </div>
        {/* 3rd card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img3} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              3. CHOISIS TA SAUCE
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
            Algérienne, samouraï, mayonnaise ou tartare : exprime tes goûts !
            </p>
          </div>
        </div>
        {/* 4rd card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={Img4} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
            4. CHOISIS TON PETIT PLUS
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
            Ajoute un extra (pour seulement 2€) : raclette, chèvre, emmental ou bacon (+1€).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
