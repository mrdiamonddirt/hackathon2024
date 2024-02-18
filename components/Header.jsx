import React from "react";
import Login from "./Login";

export default function Header() {
  return (
    <>
      <header className="bg-white shadow flex items-center justify-between px-8 py-4">
        <div>
          <img
            src="Logo.png"
            alt="ReviewFluence Logo"
            className="h-32 w-auto"
          />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">ReviewFluence</h1>
        <li>{<Login />}</li>
      </header>

      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-8">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
