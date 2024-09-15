import Image from "next/image";

export const Skillcard = ({ title, imgSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={imgSrc} alt={title} width={50} height={50} />
      <p className="mt-2 text-center">{title}</p>
    </div>
  );
};
