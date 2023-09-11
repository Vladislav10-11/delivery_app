import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png)] md:h-[70vh]">
      <div className=""></div>
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-5">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicios Burger & French Fry
        </h1>
        <p className="text-white">
          Progressively simplify effective - toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-orange-400 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" className="object-contain" alt="" fill />
      </div>
    </div>
  );
};

export default Offer;
