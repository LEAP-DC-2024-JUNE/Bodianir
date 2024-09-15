import Image from "next/image";

export const WorkCard = (props) => {
  const { title, description, img, reverse, buttons, index } = props;

  return (
    <div className="flex flex-col mb-8 items-center">
      <div
        className={`flex ${
          reverse ? "flex-col-reverse" : "flex-col"
        } sm:flex-row items-center w-full`}
      >
        <div
          className={`flex-shrink-0 w-full sm:w-1/2 ${
            reverse ? "order-last" : ""
          }`}
        >
          <Image
            src={img}
            width={500}
            height={500}
            className="mb-4 sm:mb-0"
            alt={title}
          />
        </div>

        <div className="w-full sm:w-1/2 p-4">
          <h1 className="text-xl font-bold mb-2">{title}</h1>
          <p className="mb-4">{description}</p>

          <div className="flex flex-wrap gap-3">
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
      </div>
    </div>
  );
};
