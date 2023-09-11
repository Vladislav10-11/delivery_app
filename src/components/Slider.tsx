"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Delight in Perpetually Fresh, Crispy, and Hot Delicacies!",
    image: "/slide1.jpg",
  },
  {
    id: 2,
    title: "Delivery: Your Order, Anywhere You Are!",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "Savor the Finest Family Pizza Experience!",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setcurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem) items-center md:h-[calc(100vh-9rem) lg:flex-row">
      {/*TEXT CONTAINER*/}
      <div className="h-1/2 flex flex-1 items-center justify-center flex-col gap-8 text-orange-400 font-bold lg:h-full lg:w-1/2">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-orange-400 text-white py-4 px-8">
          Order Now
        </button>
      </div>
      {/*IMAGE CONTAINER*/}
      <div className=" w-full h-1/2 relative lg:h-full lg:w-1/2 ">
        <Image
          src={data[currentSlide].image}
          alt=""
          width={1000}
          height={1000}
          className="object-cover p-8"
        />
      </div>
    </div>
  );
};

export default Slider;
