import Image from "next/image";
import Toim from "../images/Toim.png";
export const Mentor = () => {
  return (
    <div>
      <div className="text-center">
        <button className="px-4 bg-gray-200 text-black rounded-lg h-10 mt-24">
          Work
        </button>
      </div>
      <div className="flex text-center mr-72 gap-20 mt-20">
        <div>
          <p className="">Mentorhub</p>
          <p className="mt-10 ml-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="ml-64">
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-24">
              React
            </button>
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-24">
              Next.js
            </button>
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-24">
              Typescript
            </button>
            <button className="px-4 bg-gray-200 text-black rounded-lg h-10 mt-24">
              Nest.js
            </button>
          </div>
          <div className="ml-64">
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-5 ">
              PostgreSQL
            </button>
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 ">
              Tailwindcss
            </button>
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 ">
              Figma
            </button>
            <button className="px-4 bg-gray-200 text-black rounded-lg h-10 ">
              Cypress
            </button>
          </div>
          <div className="ml-64">
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-5">
              Storybook
            </button>
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-5">
              Git
            </button>
          </div>
        </div>
        <div>
          <Image src={Toim} width={800} height={1000} />
        </div>
      </div>
    </div>
  );
};
