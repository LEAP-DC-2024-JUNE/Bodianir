import Image from "next/image";
import Toim from "../images/Toim.png";
export const WorkCard = (props) => {
  const { Title, Description, imgSrc, reverse } = props;
  return (
    <div className=" flex items-center gap-20 mt-20">
      {!reverse && <Image width={500} height={500} src={imgSrc} />}
      <div>
        <p className="font-black mb-10">{Title}</p>
        <p className="w-[600px] h-[350px] ">{Description}</p>
      </div>
      {reverse && <Image width={500} height={500} src={imgSrc} />}
    </div>
  );
};
