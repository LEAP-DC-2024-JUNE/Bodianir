import Image from "next/image";
import Search from "../images/search.jpg";
export const Hicheel = () => {
  return (
    <div>
      <p className="font-black text-5xl flex justify-center mt-44  ">
        SnapShot
      </p>
      <div className="flex justify-center">
        <Image src={Search} width={300} height={300}></Image>
      </div>
    </div>
  );
};
