import Image from "next/image";
import Toim from "../images/Toim.png";
export const WorkCard = (props) => {
  const { title, description, img, reverse, buttons, index } = props;
  return (
    <div key={index} className="mb-8 flex flex-col ms items-center ">
      {!reverse && (
        <div className="flex sm:w-1/2">
          <Image
            src={img}
            width={500}
            height={500}
            className="mb-2"
            alt={title}
          />
        </div>
      )}

      <div className="w-full p-4">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="mb-4">{description}</p>

        <div className="flex flex-wrap gap-5">
          {buttons.map((tech, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      {reverse && (
        <div className="flex sm:w-1/2">
          <Image
            src={img}
            width={500}
            height={500}
            className="mb-2"
            alt={title}
          />
        </div>
      )}
    </div>
  );
};
