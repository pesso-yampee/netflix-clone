import { useEffect, useState } from "react";
import logo from "assets/media/images/header_logo.png";

export const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  function toggleBgColor() {
    window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleBgColor);
    return () => {
      window.removeEventListener("scroll", toggleBgColor);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-full">
        <div
          className={`trasition-all flex items-center justify-between p-2.5 pr-4 duration-300
            ${isScrolled ? "bg-black" : "bg-transparent"}`}
        >
          <img src={logo} alt="" width={100} />
          <div className="  h-8 w-8 bg-green-800 "></div>
        </div>
      </header>
    </>
  );
};
