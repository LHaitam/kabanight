import Image from "next/image";
import React, { useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

interface Props {
  title: string;
  image: string;
  price: string;
  reviews: string;
  description: string;
}

const BurgerCard = ({ image, price, reviews, title, description }: Props) => {
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
    <div className="bg-white p-6 rounded-lg m-3">
      {/* Image div */}
      <div className="w-[200px] mx-auto h-[200px]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      {/* title */}
      <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">
        {title}
      </h1>
      <div className="flex items-center mt-[0.5rem] space-x-3">
        <div className="flex items-center ">
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
        </div>
        <div className="text-black opacity-80">({reviews})</div>
      </div>
      <p className="mt-[0.5rem] text-black text-opacity-70 ">{description}</p>
      <div className="flex mt-[1.4rem] items-center justify-between">
        <h1 className="text-[25px] font-bold text-red-600">{price}</h1>
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
  );
};

export default BurgerCard;
