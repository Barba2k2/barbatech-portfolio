export default function Hero() {
  return (
    <div className="items-center justify-center px-[60px] flex flex-col py-10">
      <h1 className="text-4xl lg:text-6xl italic font-semibold bg-gradient-to-r from-logo-purple to-logo-blue bg-clip-text text-transparent">
        Barba Tech
      </h1>
      <h2 className="text-xl lg:text-3xl font-semibold italic bg-gradient-to-r from-logo-blue to-logo-purple bg-clip-text text-transparent mt-1">
        Full Stack Developer
      </h2>
      <p className="text-center lg:text-2xl text-xl font-medium mt-4 max-w-[900px]">
        Transformo ideias em código e desafios em oportunidades. Desenvolvedor
        que ama criar soluções criativas e funcionais, sempre com aquele toque
        especial que faz a diferença. E sim, às vezes faço magia acontecer
        (também conhecida como debugging bem-sucedido 😉).
      </p>

      <div className="flex flex-col lg:flex-row lg:gap-8 mt-4">
        <a href="#projects" target="_blank">
          <button
            type="button"
            className="bg-button-secondary hover:bg-button-hover py-3 px-[50px] w-[200px] rounded-lg mt-6 text-blackText text-2xl font-semibold"
          >
            Projetos
          </button>
        </a>

        <a href="https://wa.me/5519993171564" target="_blank">
          <button
            type="button"
            className="bg-button-primary hover:bg-button-hover py-3 px-[50px] w-[200px] rounded-lg mt-6 text-2xl text-white-primary font-semibold"
          >
            Contato
          </button>
        </a>
      </div>
    </div>
  );
}
