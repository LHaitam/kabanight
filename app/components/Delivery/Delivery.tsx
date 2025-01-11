import Image from "next/image";
import React from "react";
import DeliveryImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* Image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src={DeliveryImg} alt="delivery" />
        </div>
        {/* Text Content */}
        <div>
          <h1 className="text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Votre <span className="text-orange-500">Repas Favori</span> En Route !
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Même en pleine nuit, nous sommes là pour satisfaire votre appétit.
            Nos délicieux burgers et tacos savoureux sont à quelques clics seulement,
            prêts à être livrés directement chez vous, peu importe l&apos;heure.
            Profitez d&apos;une livraison rapide et chaude, même aux heures les plus tardives !
          </p>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-orange-500" />
            <h1 className="text-[18px] text-black font-medium">
              Livraison rapide
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-yellow-500" />
            <h1 className="text-[18px] text-black font-medium">
              Livraison à domicile
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
