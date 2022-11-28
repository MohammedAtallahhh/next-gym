import Link from "next/link";
import React from "react";
import { useScreenSize } from "../hooks/useScreenSize";

const Header = () => {
  return (
    <header className="h-[6rem]">
      <div className="w-[95%] max-w-[1200px] h-full mx-auto flex items-center">
        {/* Header Logo */}
        <div className="mr-8 p-1 bg-green-600 text-white">
          <h2 className="text-xl font-bold">Wen Gym.</h2>
        </div>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className="text-xl text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#exercises" className="text-xl text-green-600">
                Exercises
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
