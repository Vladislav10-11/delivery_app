import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:-40 text-orange-400 flex items-center justify-between">
      <Link href="/" className="text-bold text-xl">
        DELIBERY
      </Link>
      <p>ALL RIGHT RESERVED</p>
    </div>
  );
};

export default Footer;
