import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#16201e] w-full h-[70px] flex items-center justify-center">
      <ul className="flex gap-2">
        <Link href="/">
          <li className="text-white hover:bg-gray-800 py-1 px-8 rounded-md bg-[#223534] transition-all">
            Home
          </li>
        </Link>
        <Link href="/Abouts">
          <li className="text-white hover:bg-gray-800 py-1 px-8 rounded-md bg-[#223534] transition-all">
            Abouts
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
