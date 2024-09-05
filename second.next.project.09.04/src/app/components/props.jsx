import Search from "../images/search.jpg";

//   //const { newItem, description } = props;
//   return (
//     <div>
//       <button className="ml-44"></button>
//       <p className="font-black text-5xl flex justify-center mt-44  ">
//         SnapShot
//       </p>
//       <div className="flex justify-center">
//         <Image src={Search} width={300} height={300}></Image>
//       </div>
//       <p>{newItem + description}</p>
//     </div>
//   );
// };
import Image from "next/image";
import Picture from "../images/Picture.png";
export const Props = ({ title, description }) => {
  return (
    <div>
      <div className="text-center">
        <button className="px-4 mb-20 bg-gray-200 text-black rounded-lg h-10 mt-24">
          Work
        </button>
        <p className="mb-20">Some of the noteworthy projects I have built:</p>
      </div>
      <div className="flex justify-center gap-20 ">
        <Image src={Picture}></Image>
        <div className="w-96">
          <p className="mb-20">Ubcab</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
      </div>

      <div className=" text-right mr-44">
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
      <div className="text-right mr-44">
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
      <div className="text-right mr-44 ">
        <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-5">
          Storybook
        </button>
        <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-5">
          Git
        </button>
      </div>
      <div className="flex justify-center gap-20 mt-44">
        <h1 className="mb-20">{title}</h1>
        <p className="w-96 mt-20">{description}</p>
        <Image src={Picture}></Image>
      </div>
    </div>
  );
};
