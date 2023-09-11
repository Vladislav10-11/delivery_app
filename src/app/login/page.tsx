import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      {/* BOX */}
      <div className="h-full shadow-2xl rounded-sm flex flex-col md:flex-row md:h-[70%] md:w-full">
        {/* IMAGE CONTAINER */}
        <div className="flex-1 w-full relative md:h-full h-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-contain" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8">
          <h1 className="font-bold text-xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttonsk</p>
          <button className="flex gap-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
