import Image from "next/image";
import { Java } from "../icons/Java";
import { Type } from "../icons/Type";
import { React } from "../icons/React";
import { Next } from "../icons/Next";
import { Node } from "../icons/Node";
import { Express } from "../icons/Express";
import { Nest } from "../icons/Nest";
import Post from "../images/post.png";
import { Mongo } from "../icons/Mongo";
import { Sass } from "../icons/Sass";
import { Tailwind } from "../icons/Tailwind";
import { Figma } from "../icons/Figma";
import { Cypress } from "../icons/Cypress";
import { Story } from "../icons/Story";

export const Skill = () => {
  return (
    <div>
      <div className="flex justify-center">
        <button className="text-center px-4 bg-gray-200 text-black rounded-lg h-10 mt-40 ">
          Skills
        </button>
      </div>
      <p className="text-center mt-10">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="ml-64 flex gap-20 mt-20">
        <Java />
        <Type />
        <React />
        <Next />
        <Node />
        <Express />
        <Nest />
      </div>
      <div className="ml-64 gap-20 mt-10 flex">
        <Image src={Post} width={87} height={100} />
        <Mongo />
        <Sass />
        <Tailwind />
        <Figma />
        <Cypress />
        <Story />
      </div>
    </div>
  );
};