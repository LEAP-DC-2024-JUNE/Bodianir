import Java from "../images/Java.jpg";
import Type from "../images/Type.jpg";
import React from "../images/React.jpg";
import Next from "../images/Next.jpg";
import Node from "../images/Node.jpg";
import Express from "../images/Express.jpg";
import Nest from "../images/Nest.jpg";
import Socket from "../images/Socket.jpg";
import Post from "../images/post.png";
import Mongo from "../images/Mongo.png";
import Sass from "../images/Sass.png";
import Tailwind from "../images/Vector.png";
import Figma from "../images/Figma.jpg";
import Cypress from "../images/Cypress.jpg";
import Story from "../images/Story.jpg";
import Git from "../images/Git.jpg";
import { Skillcard } from "../components/Skillcard";
export const Skill = () => {
  const logos = [
    {
      imgSrc: Java,
      title: "Javascript",
    },
    {
      imgSrc: Type,
      title: "Typescript",
    },
    {
      imgSrc: React,
      title: "React.js",
    },
    {
      imgSrc: Next,
      title: "Next.js",
    },
    {
      imgSrc: Node,
      title: "Node.js",
    },
    {
      imgSrc: Express,
      title: "Express.js",
    },
    {
      imgSrc: Nest,
      title: "Nest.js",
    },
    {
      imgSrc: Socket,
      title: "Socket.io",
    },
    {
      imgSrc: Post,
      title: "Post",
    },

    {
      imgSrc: Mongo,
      title: "MongoDB",
    },
    {
      imgSrc: Sass,
      title: "Sass/Scss",
    },
    {
      imgSrc: Tailwind,
      title: "Tailwind",
    },
    {
      imgSrc: Figma,
      title: "Figma",
    },
    {
      imgSrc: Cypress,
      title: "Cypress",
    },
    {
      imgSrc: Story,
      title: "Storybook",
    },
    {
      imgSrc: Git,
      title: "Git",
    },
  ];
  return (
    <div>
      <div className="items-center flex flex-col gap-10 justify-center pt-20 pb-20 ">
        <button className="  bg-gray-300 text-black rounded-lg w-[65px] ">
          Skills
        </button>
        <p className="mb-4">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      <div className="flex flex-wrap gap-10 lg:mx-44ve">
        {logos.map((logo, index) => (
          <Skillcard title={logo.title} key={index} img={logo.imgSrc} />
        ))}
      </div>
    </div>
  );
};

// <div>
// <div className="flex justify-center">
//   <button className="text-center px-4 bg-gray-200 text-black rounded-lg h-10 mt-40 ">
//     Skills
//   </button>
// </div>
// <p className="text-center mt-10">
//   The skills, tools and technologies I am really good at:
// </p>
// <div className="ml-64 flex gap-20 mt-20">
//   <Java />
//   <Type />
//   <React />
//   <Next />
//   <Node />
//   <Express />
//   <Nest />
// </div>
// <div className="ml-64 gap-20 mt-10 flex">
//   <Image src={Post} width={87} height={100} />
//   <Mongo />
//   <Sass />
//   <Tailwind />
//   <Figma />
//   <Cypress />
//   <Story />
// </div>
// </div>
