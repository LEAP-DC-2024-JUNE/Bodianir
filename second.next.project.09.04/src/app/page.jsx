import Image from "next/image";
import { Hicheel } from "./components/hichel";
import { Zurag } from "./components/Zurag";
import { Buttons } from "./components/buttons";

export default function Home() {
  return (
    <div>
      <Hicheel />
      <Buttons />
      <Zurag />
    </div>
  );
}
