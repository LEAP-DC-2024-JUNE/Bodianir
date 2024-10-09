import { useState, useEffect, useContext } from "react";
import { Blogcard } from "./Blogcard";
import { Mycontext } from "@/Utilities/context";
export const Blogcardcontainer = ({ inputvalue }) => {
  const { cards, setLoad, setFilter, filter, load } = useContext(Mycontext);

  const filteredcards = cards.filter((card) =>
    card.title.toLowerCase().includes(inputvalue.toLowerCase())
  );
  console.log(filteredcards);
  const loadMore = () => {
    setLoad(load + 3);
  };

  if (filteredcards.length == 0)
    return (
      <div className="flex justify-center mt-44 mb-44">
        <p className="text-2xl">Not found</p>
      </div>
    );
  return (
    <div>
      <p className="mt-20 pl-36 font-black text-2xl">All Blog Post</p>
      <div className="flex gap-10 pl-40 pt-10 font-black">
        <button
          className={`hover:text-yellow-500 hover:cursor-pointer ${
            filter == "All" ? `text-gray-400` : `text-black`
          }`}
          onClick={() => setFilter("")}
        >
          All
        </button>
        <button
          className={`hover:text-yellow-500 hover:cursor-pointer ${
            filter == "Javascript" ? `text-gray-500` : `text-black`
          }`}
          onClick={() => setFilter("javascript")}
        >
          Javascript
        </button>
        <button
          className={`hover:text-yellow-500 hover:cursor-pointer ${
            filter == "css" ? `text-gray-500` : `text-black`
          }`}
          onClick={() => setFilter("css")}
        >
          Css
        </button>
        <button
          className={`hover:text-yellow-500 hover:cursor-pointer ${
            filter == "next.js" ? `text-gray-500` : `text-black`
          }`}
          onClick={() => setFilter("nextjs")}
        >
          Next.js
        </button>
        <button
          className={`hover:text-yellow-500 hover:cursor-pointer ${
            filter == "Branding" ? `text-gray-500` : `text-black`
          }`}
          onClick={() => setFilter("branding")}
        >
          Branding
        </button>
        <div
          className={`ml-auto mr-44 font-black hover:text-yellow-500 hover:cursor-pointer ${
            filter == "View All" ? `text-gray-500` : `text-black`
          }`}
        >
          <button onClick={() => setFilter("")}>View All</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-20 px-10 gap-10">
        {filteredcards.map((card) => {
          return (
            <div className="border-2 px-2 pt-2">
              <Blogcard
                id={card.id}
                imgSrc={card.social_image}
                title={card.title}
                tags={card.tag_list}
                date={card.readable_publish_date}
                name={card.user.name}
              />
            </div>
          );
        })}
        <button
          onClick={loadMore}
          className="mt-20 mr-44 border-2 w-[100px] h-[50px] text-center mb-20"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
