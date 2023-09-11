"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";
const links = [
  { id: 1, title: "HomePage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hourse", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          alt=""
        />
      ) : (
        <Image
          src="/close.png"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
          alt=""
        />
      )}
      {open && (
        <div className="bg-orange-400 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((items) => (
            <Link
              href={items.url}
              key={items.id}
              onClick={() => setOpen(false)}
            >
              {items.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Order
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
