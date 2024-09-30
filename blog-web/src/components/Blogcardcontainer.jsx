import { useState, useEffect } from "react";
import { Blogcard } from "./Blogcard";
export const Blogcardcontainer = ({ inputvalue }) => {
  const [cards, setCards] = useState([]);

  const fetchArticles = () => {
    fetch("https://dev.to/api/articles")
      .then((first) => first.json())
      .then((data) => setCards(data));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const filteredcards = cards.filter((card) =>
    card.title.toLowerCase().includes(inputvalue.toLowerCase())
  );
  if (filteredcards.length == 0)
    return (
      <div className="flex justify-center mt-44 mb-44">
        <p className="text-2xl">Not found</p>
      </div>
    );
  return (
    <div>
      <p className="mt-20 pl-36 font-black">All Blog Post</p>
      <div className="flex flex-wrap justify-center mt-20 px-10 gap-10">
        {filteredcards.map((card) => {
          return (
            <div>
              <Blogcard
                imgSrc={card.social_image}
                username={card.user.username}
                title={card.title}
                description={card.description}
                tags={card.tags}
              />
            </div>
          );
        })}
        <button className="mt-20 mr-44 border-2 w-[100px] h-[50px] text-center mb-20">
          Load More
        </button>
      </div>
    </div>
  );
};
