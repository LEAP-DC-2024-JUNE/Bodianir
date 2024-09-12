import Image from "next/image";

export const Skillcard = ({ title, imgSrc }) => {
  return (
    <div className="flex-shrink-0 flex flex-col items-center">
      <Image
        src={imgSrc}
        alt={title}
        width={40}
        height={40}
        className="object-contain" // Ensure image fits well
      />
      <p className="mt-2">{title}</p>
    </div>
  );
};
