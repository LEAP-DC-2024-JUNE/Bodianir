import { Logo } from "@/components/Logo";
import { Search } from "./Search";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = ({ setinputvalue }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-28 mt-10">
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
      {router.pathname === "/blog" ? (
        <input
          type="text"
          className="border-2 text-black w-[150px] md:w-[150px] mr-24"
          onChange={(event) => setinputvalue(event.target.value)}
          placeholder="Search..."
        />
      ) : (
        <></>
      )}

      <div className="absolute right-2 pr-28"></div>
    </div>
  );
};
