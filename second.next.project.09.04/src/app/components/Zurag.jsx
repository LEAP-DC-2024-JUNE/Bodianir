import Image from "next/image";
import Fourth from "../images/fourth.jpeg";
import Main from "../images/mainafter.webp";
import Sec from "../images/sec.jpeg";
import Third from "../images/third.jpeg";
export const Zurag = () => {
  return (
    <div className="flex gap-20 ml-52 mt-20">
      <Image src={Fourth} height={200} width={200}></Image>
      <Image src={Main} height={200} width={200}></Image>
      <Image src={Sec} height={200} width={200}></Image>
      <Image src={Third} height={200} width={200}></Image>
    </div>
  );
};
