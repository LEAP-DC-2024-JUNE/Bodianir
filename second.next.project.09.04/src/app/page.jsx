import Image from "next/image";
import { Props } from "./components/props";
import { Zurag } from "./components/Zurag";

export default function Home() {
  return (
    <div>
      <Zurag />
      <div className="flex flex-col">
        <Props
          title="Mentorhub"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
        />
      </div>
    </div>
  );
}
