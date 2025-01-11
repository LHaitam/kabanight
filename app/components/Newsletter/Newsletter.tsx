import React from "react";

const Newsletter = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">
          Rejoignez-nous pour des offres exclusives !
        </h1>
        <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
          Inscrivez-vous et recevez nos meilleures promos, des cadeaux 🎁 et bien plus encore !<br/>
          Ne manquez pas l&apos;occasion de profiter de surprises irrésistibles. ✨
        </p>
        <div className="flex items-center space-x-2 mt-[3rem] justify-center">
          {/* input */}
          <input
            type="email"
            placeholder=" Addresse Email"
            className="px-5 py-4 bg-gray-200 w-[40%] outline-none rounded-lg placeholder:text-black"
          />
          {/* subscribe button */}
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-700 transition-all duration-200 rounded-md text-white font-bold">
            S&apos;abonner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
