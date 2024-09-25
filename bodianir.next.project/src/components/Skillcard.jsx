import Image from "next/image";

export const Skillcard = ({ title, img }) => {
  return (
    <div className="flex items-center ">
      <Image src={img} alt={title} width={30} height={30} />
      <p className="mt-2 text-center">{title}</p>
    </div>
  );
};
