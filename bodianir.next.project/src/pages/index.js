import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "../icons/logo";
import Shift from "../icons/shift";
import Download from "../icons/download";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className=" flex justify-between">
        <Logo />
      </div>
      <div className=" flex justify-between , ">
        <span className="mx-1">About</span>
        <span className=" mx-1 ">Work</span>
        <span className=" mx-1 ">Testimonials</span>
        <span className=" mx-1 ">Contact</span>
        <span className=" mx-1 ">
          <Shift />
        </span>
        <span className=" mx-1">
          <Download />
        </span>
      </div>
    </div>
  );
}
