import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className={`fixed z-30 w-full flex items-center px-5 xl:px-0 xl:h-[90px] py-5 ease-in duration-300 `}>
      <div className="container mx-auto p-0">
        <div className="flex flex-row justify-between items-center gap-y-6 xl:py-8">
          <Link href={"/"}>
            <h1 className="xl:text-4xl text-base flex items-center"><b className="pr-2">Kushal</b><p className="text-accent">Mandala</p></h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
