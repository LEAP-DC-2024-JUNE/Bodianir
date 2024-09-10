import Image from "next/image";
export const Product = ({ imgSrc, title, description }) => {
  return (
    <div className="mb-4 flex-wrap border-solid border-2 w-[400px] bg-gray-400 h-[400px] ">
      <Image
        src={imgSrc}
        width={400}
        height={200}
        bg-gray
        alt={title}
        className="mb-2"
      />
      <p className="items-center">{title}</p>
      <p className="items-center text-gray-600">{description}</p>
    </div>
  );
};
