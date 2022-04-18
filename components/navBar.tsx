import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Navigation bar component with links to resumes and contact page

const NavBar = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 750);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 750);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className="grid grid-cols-2 items-center m-2 z-50 bg-slate-800 rounded-full ">
      {/* my logo here */}
      <Link href="/">
        <a className="mx-7 my-3">
          <Image
            src="/images/hp_logo2_white.svg"
            alt="Henry Pendleton"
            width={125}
            height={100}
          />
        </a>
      </Link>

{ isDesktop ? 
      <div className=" flex flex-row text-white justify-end mx-20items-center">
        <div className="mx-10 p-4 rounded-full hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out text-3xl ">
          <Link href="/">Home</Link>
        </div>
        <div className="mx-10 p-4 rounded-full hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out text-3xl">
          <Link href="/resume">Resume</Link>
        </div>
        <div className="mx-10 p-4 rounded-full hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out text-3xl">
          <Link href="/contact">Contact</Link>
        </div>
      </div>

: <div> navigation bar </div>}
    </div>
  );
};

export default NavBar;
