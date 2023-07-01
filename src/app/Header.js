import Image from "next/image";

const Header = () => (
  <header className="py-3 md:py-5 px-2 md:px-20 bg-bgPrimary shadow-2xl text-textPrimary sticky top-0 left-0 right-0 z-10">
    <nav className="flex justify-between">
      <ul>
        <Image
          src="/logos/stream-fighters.png"
          alt="Stream Fighters logo"
          height={60}
          width={128}
          className="max-w-[60px] md:max-w-[128px]"
          priority
        />
      </ul>
      <ul className="w-fit flex flex-col justify-center text-center">
        <a
          href="https://www.tuboleta.com/eventos/detalle/stream-figthers-2/4531421337"
          className="buy-btn"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <span>Comprar</span>
          <span className="ml-[5px] hidden md:inline">Entradas</span>
        </a>
      </ul>
    </nav>
  </header>
);

export default Header;
