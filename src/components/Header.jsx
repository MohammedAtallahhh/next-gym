import Link from "next/link";
import React from "react";
import { useScreenSize } from "../hooks/useScreenSize";

const Header = () => {
  return (
    <header className="h-[6rem]">
      <div className="w-[95%] max-w-[1200px] h-full mx-auto flex items-center">
        {/* Header Logo */}
        <Link href="/" className="p-1 mr-8 text-white bg-blue-600">
          <h2 className="text-xl font-bold">Wen Gym.</h2>
        </Link>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="text-xl text-blue-400 transition-all hover:text-blue-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#exercises"
                className="text-xl text-blue-400 transition-all hover:text-blue-700"
              >
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
