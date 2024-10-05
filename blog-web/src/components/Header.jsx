import { Logo } from "@/components/Logo";
import { Search } from "./Search";
import Link from "next/link";

export const Header = ({ setinputvalue }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-20">
      <Link href="/" className="flex-shrink-0 mb-4 md:mb-0 pl-24">
        <Logo />
      </Link>

      <div className="flex-grow flex justify-center px-4 mb-4 md:mb-0">
        <Link href="/" className="px-4">
          Home
        </Link>
        <Link href="/blog">Blog</Link>

        <Link href="#footer" className="px-4">
          Contact
        </Link>
      </div>
      <input
        type="text"
        className="border-2 text-black w-[150px] md:w-[150px] mr-24"
        onChange={(event) => setinputvalue(event.target.value)}
        placeholder="Search..."
      />

      <div className="absolute right-2 pr-28">
        <button>
          <Search />
        </button>
      </div>
    </div>
  );
};
