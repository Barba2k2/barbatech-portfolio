"use client";

import Image from "next/image";

export default function Projects() {
  return (
    <div className="px-[60px] py-10">
      <div className="flex flex-col">
        <h1 className="text-4xl lg:text-5xl font-semibold self-center">
          Projetos
        </h1>
        <p className="font-semibold self-center mt-5">
          _____________________________
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6 lg:mt-10">
        {/* Projeto 1 */}
        <div>
          <Image
            src="/projects/meu_carango.png"
            alt="Meu Carango"
            width={500}
            height={500}
          />
          <h1 className="text-2xl lg:text-4xl font-bold lg:mt-6 mt-4">
            Meu Carango
          </h1>
          <p className="font-medium lg:mt-4 mt-2 max-w-[500px]">
            O Meu Carango é um aplicativo que simplifica o gerenciamento
            veicular, permitindo calcular consumo de combustível, controlar
            manutenções e monitorar gastos através de uma interface intuitiva.
            Desenvolvido para atender desde motoristas comuns até profissionais
            do transporte, o app transforma a complexidade da gestão automotiva
            em uma experiência prática e eficiente.
          </p>
          <div className="flex flex-row mt-6 lg:mt-10 items-start gap-4">
            <img
              src="https://cdn.worldvectorlogo.com/logos/go-8.svg"
              alt="Go Lang Logo"
              className="w-1010h-110 lg:w-12 lg:h-12"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg"
              alt="Flutter Logo"
              className="w-1010h-110 lg:w-12 lg:h-12"
            />
          </div>
          <div className="flex flex-row mt-6 lg:mt-10 items-start gap-4">
            <a
              href="https://github.com/Barba2k2/meu_carango_app"
              target="_blank"
            >
              <Image
                src="/logos/github.svg"
                alt="Meu Carango"
                width={28}
                height={28}
              />
            </a>
            <a href="" target="_blank">
              <Image
                src="/logos/chain.svg"
                alt="Meu Carango"
                width={28}
                height={28}
              />
            </a>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="flex flex-col">
          <div>
            <Image
              src="/projects/currency_converter.png"
              alt="Meu Carango"
              width={500}
              height={500}
            />
            <h1 className="text-2xl lg:text-4xl font-bold lg:mt-6 mt-4">
              Currency Converter
            </h1>
            <p className="font-medium lg:mt-4 mt-2 max-w-[500px]">
              O Currency Converter é um aplicativo minimalista e eficiente para
              conversão de moedas em tempo real, conectado a uma API de câmbio
              atualizada. Com uma interface limpa e intuitiva, o app permite aos
              usuários realizar conversões instantâneas entre diferentes moedas
              mundiais, sendo ideal para viajantes e profissionais que precisam
              de informações rápidas sobre taxas de câmbio.
            </p>
            <div className="flex flex-row mt-6 lg:mt-10 items-start gap-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg"
                alt="Flutter Logo"
                className="w-1010h-110 lg:w-12 lg:h-12"
              />
            </div>
            <div className="flex flex-row mt-6 lg:mt-10 items-start gap-4">
              <a
                href="https://github.com/Barba2k2/currency_converter"
                target="_blank"
              >
                <Image
                  src="/logos/github.svg"
                  alt="Github Logo"
                  width={28}
                  height={28}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.barbatech.currency_converter"
                target="_blank"
              >
                <Image
                  src="/logos/chain.svg"
                  alt="Chain"
                  width={28}
                  height={28}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="flex flex-col">
          <div>
            <Image
              src="/projects/flutterando_connect.png"
              alt="Meu Carango"
              width={500}
              height={500}
            />
            <h1 className="text-2xl lg:text-4xl font-bold lg:mt-6 mt-4">
              Flutterando Connect
            </h1>
            <p className="font-medium lg:mt-4 mt-2 max-w-[500px]">
              O Flutterando Connect é uma landing page desenvolvida para um
              evento tecnológico focado em Flutter e empreendedorismo. Com um
              design moderno e intuitivo, o site fornece informações essenciais
              sobre o evento, programação e palestrantes, permitindo que os
              interessados conheçam o conteúdo e realizem suas inscrições. O
              projeto foi desenvolvido colaborativamente com design por Robson
              Zeni e desenvolvimento por Barba Tech.
            </p>
            <div className="flex flex-row mt-6 lg:mt-10 items-start gap-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                alt="Next.js Logo"
                className="w-10 h-10 lg:w-12 lg:h-12"
              />
            </div>
            <div className="flex flex-row mt-6 lg:mt-10 items-start gap-4">
              <a href="https://connect.flutterando.com.br" target="_blank">
                <Image
                  src="/logos/chain.svg"
                  alt="Chain"
                  width={28}
                  height={28}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 4 */}
        <div className="flex flex-col">
          <div>
            <Image
              src="/projects/adote_um_pet.png"
              alt="Meu Carango"
              width={500}
              height={500}
            />
            <h1 className="text-2xl lg:text-4xl font-bold lg:mt-6 mt-4">
              Adote Um Pet
            </h1>
            <p className="font-medium lg:mt-4 mt-2 max-w-[500px]">
              O Adote um Pet é um aplicativo inovador que conecta pessoas
              interessadas em adoção com tutores que possuem animais para
              doação, funcionando de maneira similar a um aplicativo de
              relacionamento. Através de uma interface intuitiva, os usuários
              podem navegar por perfis de cães e gatos disponíveis, filtrar por
              características desejadas e, ao encontrar um match perfeito,
              conversar diretamente com o doador através do chat integrado do
              aplicativo, tornando o processo de adoção mais dinâmico e
              acessível.
            </p>
            <div className="flex flex-row mt-6 lg:mt-10 items-start gap-4">
              <img
                src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg"
                alt="Lavarel Logo"
                className="w-10 h-10 lg:w-12 lg:h-12"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg"
                alt="Flutter Logo"
                className="w-10 h-10 lg:w-12 lg:h-12"
              />
            </div>
            <div className="flex flex-row mt-6 lg:mt-10 items-start gap-4">
              <a
                href="https://github.com/tecrodrigocastro/adote-um-pet-app"
                target="_blank"
              >
                <Image
                  src="/logos/github.svg"
                  alt="Github Logo"
                  width={28}
                  height={28}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
