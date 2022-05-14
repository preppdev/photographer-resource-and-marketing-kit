import React from "react";
import Link from "next/link";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <main>
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">
            Professional Real Estate Photo Post Processing
          </h2>
          <Link href={"/"}>
            <a className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 hover:text-g sm:text-4xl">
              Prepp Photographer Resources and Marketing Kit
            </a>
          </Link>
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Header;
