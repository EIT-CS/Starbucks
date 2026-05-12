'use client';

import type { PropsWithChildren } from "react";
import { Navbar } from "./Navbar"


export const HomeLayout = ({ children }: PropsWithChildren) => {

  return (
    <>
      <Navbar />
      <main className="flex-1 ml-20 mr-9 mb-9 bg-[#FEF9F3] rounded-3xl relative items-center h-full">
        {/* <img src="/bgLogo.svg" alt="" className="absolute top-1/5 w-64 right-0 object-cover z-10"> */}
        {children}
        {/* </img> */}
      </main >
    </>
  );
};
