import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 text-sm bg-gray-100">
      <div className="w-[95%] max-w-[1000px] mx-auto flex justify-between items-center">
        <Link href="/" className="inline-block p-1 mr-8 text-white bg-blue-600">
          <h2 className="text-lg font-bold">Wen Gym.</h2>
        </Link>
        <p className="text-gray-500">Made with 💙 by Mohammed Atallah</p>
      </div>
    </footer>
  );
};

export default Footer;
