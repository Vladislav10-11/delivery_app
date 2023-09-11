import Image from "next/image";
import React from "react";
import { featuredProducts } from "./data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-orange-400 overflow-y-hidden">
      {/*WRAPPER*/}
      <div className="w-max flex">
        {/*SINGLE ITEMS*/}

        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-yellow-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/*IMAGE CONTAINER*/}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} className=" object-contain" fill alt="" />
              </div>
            )}
            {/*TEXT CONTAINER*/}
            <div className="flex-1 flex flex-col items-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl">
                {item.title}
              </h1>
              <p className="p-4 xl:p-8"> {item.desc}</p>
              <span className="text-xl font-bold">{item.price}</span>
              <button className="bg-orange-400 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
