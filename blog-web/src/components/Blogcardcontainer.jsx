import { useState, useEffect } from "react";
import { Blogcard } from "./Blogcard";
export const Blogcardcontainer = ({ inputvalue }) => {
  const [cards, setCards] = useState([]);

  const fetchArticles = () => {
    fetch("https://dev.to/api/articles")
      .then((first) => first.json())
      .then((data) => setCards(data));
  };
  console.log(cards);

  useEffect(() => {
    fetchArticles();
  }, []);

  const filteredcards = cards.filter((card) =>
    card.title.toLowerCase().includes(inputvalue.toLowerCase())
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
              />
              <button className="border-3 rounded-2xl w-[100px] bg-gray-300 text-blue-700">
                Technology
              </button>
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
