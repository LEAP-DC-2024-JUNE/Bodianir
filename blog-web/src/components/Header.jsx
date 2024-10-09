import { Logo } from "@/components/Logo";
import { Search } from "./Search";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Mycontext } from "@/Utilities/context";

export const Header = ({ setinputvalue }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row mb-28 mt-10 ">
      <Link href="/" className="ml-48">
        <Logo />
      </Link>

      <div className="flex ml-64 mb-4 mt-3 md:mb-0 gap-10">
        <Link href="/" className="px-4">
          Home
        </Link>
        <Link href="/blog">Blog</Link>

        <Link href="/contact" className="px-4">
          Contact
        </Link>
      </div>
      <div className="ml-64 mt-3">
        {router.pathname === "/blog" ? (
          <input
            type="text"
            className="border-2 text-black w-[150px] md:w-[150px] "
            onChange={(event) => setinputvalue(event.target.value)}
            placeholder="Search..."
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
