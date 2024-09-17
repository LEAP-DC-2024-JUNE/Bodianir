import Image from "next/image";

export const Skillcard = ({ title, img }) => {
  return (
    <div className="flex items-center">
      <Image src={img} alt={title} width={40} height={40} />
      <p className="mt-2 text-center">{title}</p>
    </div>
  );
};
