import CtaButton from "../CtaButton";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 py-[1.5rem] md:py-[1.8rem] px-[1.5rem] md:px-[7rem] flex justify-between gap-10 items-center z-30 backdrop-blur-md">
      <div className="flex justify-start items-center gap-[5.5rem]">
        <img
          src="https://forcythe.com/images/forcythe%20logo.svg"
          alt="Forcythe logo"
          width="150"
          height="10"
          decoding="async"
          data-nimg="1"
          className="w-32 md:w-36"
        />

        <ul className="hidden md:flex justify-center items-center gap-4 text-base">
          <li>
            <span className="cursor-pointer">About</span>
          </li>
          <li>
            <span className="cursor-pointer">Services</span>
          </li>
          <li>
            <span className="cursor-pointer">Portfolio</span>
          </li>
          <li>
            <span className="cursor-pointer">Studio</span>
          </li>
          <li>
            <span className="cursor-pointer">Foundation</span>
          </li>
        </ul>
      </div>

      <div className="bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer">
        <img
          alt="menu"
          loading="lazy"
          width="18"
          height="18"
          decoding="async"
          data-nimg="1"
          src="/src/assets/icons/menu.svg"
        />
      </div>

      <div className="hidden md:block">
        <CtaButton />
      </div>
    </header>
  );
};

export default Header;
