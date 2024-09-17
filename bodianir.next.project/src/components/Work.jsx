import Image from "next/image";
import Picture from "../images/Picture.png";
import Medee from "../images/Medee.png";
import Toim from "../images/Toim.png";
import { WorkCard } from "./Workcard";

export const Work = () => {
  const works = [
    {
      title: "UBcab",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      ],
      imgSrc: Picture,
      button: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwind.css",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      title: "Mentorhub",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      ],
      imgSrc: Toim,
      button: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwind.css",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      reverse: true,
    },
    {
      title: "Itoim",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      ],
      imgSrc: Medee,
      button: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwind.css",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  ];

  return (
    <div>
      <div className="items-center text-center mt-10 mb-10">
        <button className="px-4 bg-gray-300 text-black  rounded-lg h-8 mt-20">
          Experience
        </button>
        <div className="items-center text-center mt-10 mb-10">
          <p>Here is a quick summary of my most recent experiences</p>
        </div>
      </div>
      {works.map((work, index) => {
        return (
          <WorkCard
            index={index}
            title={work.title}
            description={work.description}
            img={work.imgSrc}
            buttons={work.button}
            reverse={index == 1 ? true : false}
          />
        );
      })}
    </div>
  );
};

//   <div className="flex flex-col items-center">
//   <WorkCard
//     imgSrc={Picture}
//     Title="UBCab"
//     Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
//   />

//   <WorkCard
//     imgSrc={Toim}
//     Title="Mentorhub"
//     Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
//     reverse={true}
//   />
//   <WorkCard
//     imgSrc={Medee}
//     Title="iToim"
//     Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
//   />
// </div>

/* <div>
      <div className="text-center">
        <button className="px-4 bg-gray-200 text-black rounded-lg h-10 mt-24">
          Work
        </button>
        <p className="mt-10">Some of the noteworthy projects I have built:</p>
      </div>
      <div className="flex text-center ml-72 gap-20 mt-20">
        <div>
          <Image src={Picture} width={800} height={1000} />
        </div>
        <div>
          <p className="mr-96">UBCab</p>
          <p className="mt-10 mr-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="mr-64">
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
          <div className="mr-64">
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
          <div className="mr-64">
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-5">
              Storybook
            </button>
            <button className="px-4 mr-5 bg-gray-200 text-black rounded-lg h-10 mt-5">
              Git
            </button>
          </div>
        </div>
      </div>
    </div> */
