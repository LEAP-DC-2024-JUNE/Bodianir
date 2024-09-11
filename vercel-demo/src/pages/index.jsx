import Image from "next/image";
import localFont from "next/font/local";
import { Class } from "../components/class";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="bg-white">
      {/* <Class /> */}
      <div className="w-[200px] h-[200px] bg-black sm:bg-red-600 sm:w-[200px] sm:h-[200px]"></div>
    </div>
  );
}
