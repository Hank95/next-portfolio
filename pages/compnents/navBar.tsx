import Link from "next/link";
import Image from "next/image";
// Navigation bar component with links to resumes and contact page

const NavBar = () => {
  return (
    <div className="grid grid-cols-2 items-center m-auto">
      {/* my logo here */}
      <Link href="/">
        <a className="m-7">
          <Image
            src="/images/hp_logo2_white.svg"
            alt="Henry Pendleton"
            width={125}
            height={125}
          />
        </a>
      </Link>
      <div className=" flex flex-row text-white justify-end mx-20 items-center">
        <div className="mx-10 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out">
          <Link href="/">Home</Link>
        </div>
        <div className="mx-10 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out">
          <Link href="/resume">Resume</Link>
        </div>
        <div className="mx-10 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
