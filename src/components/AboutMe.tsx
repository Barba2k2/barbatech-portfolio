"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="px-[60px] flex flex-col py-10 items-center">
      <h1 className="text-4xl lg:text-5xl italic font-semibold bg-gradient-to-r from-logo-purple to-logo-blue bg-clip-text text-transparent self-center relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-logo-purple after:to-logo-blue">
        Sobre Mim
      </h1>
      <p className="text-center lg:text-2xl text-xl font-medium mt-10 max-w-[900px]">
        Minha jornada no desenvolvimento começou com uma curiosidade infinita e
        evoluiu para uma paixão por criar soluções que impactam pessoas.
        Especializado em Mobile e Web, combino conhecimento técnico com
        criatividade para entregar resultados que superam expectativas. Quando
        não estou codando, estou explorando novas tecnologias ou resolvendo
        puzzles de programação - sim, sou aquele dev que acha isso divertido! 🤓
      </p>

      <ul className="mt-14 flex flex-col lg:flex-row lg:gap-10 gap-4 items-center">
        <li className="flex items-center gap-3 text-base lg:text-2xl">
          <Image
            src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
            alt="Next.js Logo"
            className="w-6 h-6 lg:w-16 lg:h-16"
          />
          <span className="lg:hidden">Next.js</span>
        </li>
        <li className="flex items-center gap-3 text-base lg:text-2xl">
          <Image
            src="https://cdn.worldvectorlogo.com/logos/nestjs.svg"
            alt="Nest.js Logo"
            className="w-6 h-6 lg:w-16 lg:h-16"
          />
          <span className="lg:hidden">Nest.js</span>
        </li>
        <li className="flex items-center gap-3 text-base lg:text-2xl">
          <Image
            src="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg"
            alt="Flutter Logo"
            className="w-6 h-6 lg:w-16 lg:h-16"
          />
          <span className="lg:hidden">Flutter</span>
        </li>
        <li className="flex items-center gap-3 text-base lg:text-2xl">
          <Image
            src="https://cdn.worldvectorlogo.com/logos/go-8.svg"
            alt="Go Lang Logo"
            className="w-6 h-6 lg:w-16 lg:h-16"
          />
          <span className="lg:hidden">Go Lang</span>
        </li>
        <li className="flex items-center gap-3 text-base lg:text-2xl">
          <Image
            src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
            alt="Python Logo"
            className="w-6 h-6 lg:w-16 lg:h-16"
          />
          <span className="lg:hidden">Python</span>
        </li>
      </ul>
    </div>
  );
}
