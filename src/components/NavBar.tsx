import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const NavBar = () => {
  const user = false;
  return (
    <div className="h-12 text-orange-400 p-4 flex items-center justify-between border-b-2 border-b-orange-400 uppercase">
      {/*LEFT LINKS*/}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="\">HomePage</Link>
        <Link href="\menu">Menu</Link>
        <Link href="\">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl flex-1 md:text-center">
        <Link href="/">Delibery</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/*RIGHT LINKS*/}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="flex items-center gap-2 lg:static cursor-pointer bg-yellow-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20}></Image>
          <span> 123 456 78 </span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default NavBar;
