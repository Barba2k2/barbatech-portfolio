"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-6 flex justify-between items-center mx-auto lg:max-w-[1440px] max-w-[380px] w-full relative">
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
      <div className="hidden lg:flex items-center gap-8">
        {/* Links de navegação para desktop */}
        <div className="flex items-center text-2xl space-x-16 font-semibold leading-5">
          <a href="#home" className="text-white hover:text-gray-300">
            Inicio
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            Sobre
          </a>
          <a href="#projects" className="text-white hover:text-gray-300">
            Projetos
          </a>
        </div>

        {/* Botão de contato */}
        <div>
          <a
            href="https://wa.me/5519993171564"
            target="_blank"
            className="bg-button-primary text-white px-9 py-3 w-[200px] rounded-lg hover:bg-button-hover font-bold text-2xl"
          >
            Contato
          </a>
        </div>
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
              Inicio
            </a>
            <a
              href="#about"
              className="text-xl font-semibold hover:text-gray-300"
            >
              Sobre mim
            </a>
            <a
              href="#projects"
              className="text-xl font-semibold hover:text-gray-300"
            >
              Projetos
            </a>
          </div>

          <div className="p-6 flex justify-center">
            <a
              href="#contact"
              className="bg-button-primary text-white text-xl leading-5 w-[200px] px-6 py-3 rounded-lg hover:bg-button-hover font-semibold flex items-center justify-center"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
