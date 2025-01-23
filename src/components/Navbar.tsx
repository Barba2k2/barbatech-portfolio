"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-6 py-6 flex justify-between items-center mx-auto lg:max-w-[1140px] max-w-[380px] w-full relative">
      {/* Logo visível em todas as telas */}
      <div className="flex items-center">
        <Image src="logo.svg" alt="Barba Tech Logo" width={80} height={80} />
      </div>

      {/* Botão de menu hamburguer ou X - visível apenas em telas pequenas */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {/* Exibe o ícone de hamburguer ou X com base no estado */}
          {isOpen ? (
            <Image
              src="/navigation/x.svg"
              alt="Close Menu"
              width={28}
              height={28}
            />
          ) : (
            <Image
              src="/navigation/menu.svg"
              alt="Open Menu"
              className="text-white focus:outline-none"
              width={28}
              height={28}
            />
          )}
        </button>
      </div>

      {/* Links de navegação para desktop - escondidos no mobile */}
      <div className="hidden lg:flex justify-center items-center text-base space-x-8 font-medium leading-5">
        <a href="#home" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#about" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="#projects" className="text-white hover:text-gray-300">
          Projects
        </a>
      </div>

      <div className="hidden lg:block">
        <a
          href="#contact"
          className="bg-button-primary text-white px-6 py-3 w-[200px] rounded-lg hover:bg-button-hover font-semibold"
        >
          Contact
        </a>
      </div>

      {/* Menu suspenso para mobile */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-[400px] bg-black-bg text-white z-50 flex flex-col">
          <div className="flex justify-between px-6 py-6">
            <Image
              src="logo.svg"
              alt="Barba Tech Logo"
              width={80}
              height={80}
            />
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <Image
                src="/navigation/x.svg"
                alt="Close Menu"
                width={28}
                height={28}
              />
            </button>
          </div>

          <div className="flex flex-col items-center space-y-6 pt-6">
            <a
              href="#home"
              className="text-xl font-semibold hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xl font-semibold hover:text-gray-300"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-xl font-semibold hover:text-gray-300"
            >
              Projects
            </a>
          </div>

          <div className="p-6 flex justify-center">
            <a
              href="#contact"
              className="bg-button-primary text-white text-xl leading-5 w-[200px] px-6 py-3 rounded-lg hover:bg-button-hover font-semibold flex items-center justify-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
